import { useAppDispatch } from '../../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { textChange } from '../newMessageSlice';
import FormCardTitle from './FormCardTitle';
import style from '../assets/style.module.css';
import ChatViewVK from '../../views/chatViewVK/ChatViewVK';
import ChatViewTG from '../../views/chatViewTG/ChatViewTG';
import ChatViewSMS from '../../views/chatViewSMS/ChatViewSMS';
import ButtonsForm from './ButtonsForm';

export interface IFormCardProps {
    type: 'all' | 'vk' | 'wa' | 'tg' | 'sms';
}

const FormCard = (props: IFormCardProps) => {
    const dispatch = useAppDispatch();
    const channel = props.type;
    const channelIndex = ['all', 'vk', 'wa', 'tg', 'sms'].indexOf(channel);

    const restrictions = useSelector((state: RootState) => {
        return state.newMessage.channels[channelIndex].restrictions;
    });

    const text = useSelector((state: RootState) => {
        return state.newMessage.channels[channelIndex].text;
    });
    const buttons = useSelector((state: RootState) => {
        return state.newMessage.channels[channelIndex].buttons;
    });
    const buttonsInline = useSelector((state: RootState) => {
        return state.newMessage.channels[channelIndex].buttons_inline;
    });

    const handleTextChange = (e: any) =>
        dispatch(
            textChange({
                channel,
                text: e.target.value,
            }),
        );

    return (
        <>
            <FormCardTitle type={props.type} />
            <div className={style.card}>
                {/*<iframe*/}
                {/*    src={'/tg'}*/}
                {/*    width={400}*/}
                {/*    height={600}*/}
                {/*></iframe>*/}
                <div className={style.view}>
                    {props.type === 'vk' && (
                        <ChatViewVK
                            text={text}
                            buttons={buttons}
                            buttonsInline={buttonsInline}
                        />
                    )}
                    {props.type === 'tg' && (
                        <ChatViewTG
                            text={text}
                            buttons={buttons}
                            buttonsInline={buttonsInline}
                        />
                    )}
                    {props.type === 'sms' && <ChatViewSMS text={text} />}
                </div>
                <div className={style.form}>
                    <h3>Текст сообщения</h3>
                    <textarea
                        name="text"
                        value={text}
                        onChange={handleTextChange}
                    ></textarea>
                    <span className="info">
                        Длинная сообщения = {text.length} символов
                    </span>
                    {text.length > restrictions.maxTextLength && (
                        <span className="error">
                            Текст слишком длинный. Ограничение -{' '}
                            {restrictions.maxTextLength} символов
                        </span>
                    )}
                    <div className={style.buttons}>
                        {restrictions.isButtonAvailable && (
                            <ButtonsForm
                                channel={channel}
                                buttonsType="normal"
                                buttons={buttons}
                                restrictions={{
                                    maxButtonsCount:
                                        restrictions.maxButtonsCount,
                                    maxButtonTextLength:
                                        restrictions.maxButtonTextLength,
                                    haveLinks:
                                        restrictions.isButtonLinkAvailable,
                                }}
                            />
                        )}
                        {restrictions.isButtonInlineAvailable && (
                            <ButtonsForm
                                channel={channel}
                                buttonsType="inline"
                                buttons={buttonsInline}
                                restrictions={{
                                    maxButtonsCount:
                                        restrictions.maxButtonsInlineCount,
                                    maxButtonTextLength:
                                        restrictions.maxButtonInlineTextLength,
                                    haveLinks:
                                        restrictions.isButtonInlineLinkAvailable,
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormCard;
