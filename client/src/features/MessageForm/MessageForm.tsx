import style from './assets/style.module.css';
import FormCard from './components/FormCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { INewMessageState } from './types';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { clear } from './newMessageSlice';

const MessageForm = () => {
    const location: any = useLocation();
    const state = location.state;
    const formData = useSelector((state: RootState) => state.newMessage);
    const dispatch = useAppDispatch();

    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    const getChannelName = (type: string) => {
        if (type === 'vk') return 'Вконтакте';
        if (type === 'wa') return 'WhatsApp';
        if (type === 'tg') return 'Телеграм';
        if (type === 'sms') return 'СМС';
        return 'unknown';
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrorMessage('');

        const validate = (data: INewMessageState) => {
            const channels = data.channels;

            for (let i = 0; i < channels.length; i++) {
                const channel = channels[i];

                // проверка наличия сообщения
                if (
                    channel.channelType !== 'all' &&
                    channel.text.length === 0
                ) {
                    return `В канале ${getChannelName(
                        channel.channelType,
                    )} текст сообщения пуст`;
                }

                // проверка длинны сообщения
                if (channel.text.length > channel.restrictions.maxTextLength) {
                    return `В канале ${getChannelName(
                        channel.channelType,
                    )} превышена длинна сообщения`;
                }
                // проверка числа кнопок
                if (
                    channel.buttons.length >
                    channel.restrictions.maxButtonsCount
                ) {
                    return `В канале ${getChannelName(
                        channel.channelType,
                    )} слишком много кнопок`;
                }
                // проверка длинны кнопки
                for (let j = 0; j < channel.buttons.length; j++) {
                    const button = channel.buttons[j];

                    if (
                        button.text.length >
                        channel.restrictions.maxButtonTextLength
                    ) {
                        return `В канале ${getChannelName(
                            channel.channelType,
                        )} у одной или нескольких кнопок слишком длинный текст`;
                    }
                }
                // проверка числа inline кнопок
                if (
                    channel.buttons_inline.length >
                    channel.restrictions.maxButtonsInlineCount
                ) {
                    return `В канале ${getChannelName(
                        channel.channelType,
                    )} слишком много кнопок`;
                }
                // проверка длинны кнопки
                for (let j = 0; j < channel.buttons_inline.length; j++) {
                    const button = channel.buttons_inline[j];

                    if (
                        button.text.length >
                        channel.restrictions.maxButtonInlineTextLength
                    ) {
                        return `В канале ${getChannelName(
                            channel.channelType,
                        )} у одной или нескольких кнопок слишком длинный текст`;
                    }
                }

                const withLinksCount = channel.buttons_inline.reduce(
                    (acc, e) => {
                        return e.url ? acc + 1 : acc;
                    },
                    0,
                );

                if (channel.channelType === 'wa' && withLinksCount > 1) {
                    return `В канале ${getChannelName(
                        channel.channelType,
                    )} слишком много кнопок со ссылками`;
                }
            }
            return true;
        };
        const validationResult = validate(formData);
        if (validationResult === true) {
            fetch('/api/message', {
                method: 'POST',
                body: JSON.stringify({
                    campaign: {
                        id: state.id,
                    },
                    channels: formData.channels.filter((channel) => {
                        return state.channels.includes(channel.channelType);
                    }),
                }),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(() => dispatch(clear()))
                .then(() => navigate(-1));
        } else setErrorMessage(validationResult);
    };

    return (
        <div>
            <h1>Форма нового сообщения</h1>
            <p>Вы добавляете сообщение в "{state && state.title}"</p>

            <div className={style.cards}>
                <FormCard type="all" />
                {state.channels.includes('vk') && <FormCard type="vk" />}
                {state.channels.includes('wa') && <FormCard type="wa" />}
                {state.channels.includes('tg') && <FormCard type="tg" />}
                {state.channels.includes('sms') && <FormCard type="sms" />}
            </div>

            <button className="button" onClick={handleSubmit}>
                Сохранить
            </button>
            <br />
            {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
    );
};

export default MessageForm;
