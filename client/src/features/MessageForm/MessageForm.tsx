import style from './style.module.css';
import ChatViewTG from '../views/chatViewTG/ChatViewTG';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/hooks';
import {
    addButton,
    addButtonInline,
    removeButton,
    removeButtonInline,
    textChange,
} from './newMessageSlice';
import deleteIcon from './assets/delete.svg';
import { useState } from 'react';
import { IButton } from './types';
import ChatViewSMS from '../views/chatViewSMS/ChatViewSMS';
import ChatViewVK from '../views/chatViewVK/ChatViewVK';

const MessageForm = () => {
    return (
        <div>
            <h1>Форма нового сообщения</h1>
            <span>выберите кампанию</span>
            <select name="campaign" id="campaign-select">
                <option value="">Кампания 1</option>
                <option value="">Кампания 2</option>
                <option value="">Кампания 3</option>
                <option value="">Кампания 4</option>
                <option value="">Кампания 5</option>
            </select>
            <div className={style.cards}>
                <FormCard type="all" />
                <FormCard type="vk" />
                <FormCard type="wa" />
                <FormCard type="tg" />
                <FormCard type="sms" />
            </div>
        </div>
    );
};

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

export interface IButtonsFormProps {
    channel: 'all' | 'vk' | 'wa' | 'tg' | 'sms';
    buttonsType: 'normal' | 'inline';
    buttons: IButton[];
    restrictions: {
        maxButtonsCount: number;
        maxButtonTextLength: number;
        haveLinks: boolean;
    };
}

const ButtonsForm = (props: IButtonsFormProps) => {
    const { channel, buttonsType, buttons, restrictions } = props;

    const dispatch = useAppDispatch();

    const [newButtonError, setNewButtonError] = useState<string>('');
    const [newButtonText, setNewButtonText] = useState<string>('');
    const [newButtonUrl, setNewButtonUrl] = useState<string>('');

    const withLinksCount = buttons.reduce((acc, e) => {
        return e.url ? acc + 1 : acc;
    }, 0);

    const handleAddButton = () => {
        const text = newButtonText;
        const url = newButtonUrl;
        const urlRegExp =
            /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;

        const validate = () => {
            if (!text) return 'Текст кнопки должен быть не пустой';
            if (text.length > restrictions.maxButtonTextLength)
                return 'Слишком длиннный текст';
            if (url && !urlRegExp.test(url)) return 'Некорректный URL';
            return true;
        };

        const validationResult = validate();
        if (validationResult === true) {
            const args = {
                channel,
                button: {
                    id: `${new Date().valueOf()}_${Math.random()}`,
                    text,
                    url,
                },
            };
            dispatch(
                buttonsType === 'normal'
                    ? addButton(args)
                    : addButtonInline(args),
            );
        } else setNewButtonError(validationResult);

        // setNewButtonText('')
        // setNewButtonUrl('')
    };
    return (
        <div className={style.buttons_normal}>
            {buttonsType === 'normal' && <h3>Кнопки сообщения</h3>}
            {buttonsType === 'inline' && <h3>Inline кнопки сообщения</h3>}

            {buttons.length > 0 && (
                <span className="info">
                    Количество кнопок - {buttons.length}
                </span>
            )}
            {buttons.length > restrictions.maxButtonsCount && (
                <span className="error">
                    Слишком много кнопок. Ограничение -{' '}
                    {restrictions.maxButtonsCount}
                </span>
            )}

            <div className={style.buttonsContainer}>
                {buttons.map((button) => (
                    <MessageButton
                        {...button}
                        buttonType={buttonsType}
                        channel={channel}
                        key={button.id}
                    />
                ))}
            </div>

            {buttons.map((button, index) => {
                if (button.text.length > restrictions.maxButtonTextLength) {
                    return (
                        <span className="error">
                            Текст кнопки{' '}
                            <MessageButton
                                {...button}
                                buttonType={buttonsType}
                                channel={channel}
                                key={button.id}
                            />{' '}
                            слишком длинный ({button.text.length}). Ограничение
                            - {restrictions.maxButtonTextLength} символов
                        </span>
                    );
                }
                return <></>;
            })}

            {channel === 'wa' && withLinksCount > 1 && (
                <span className="error">
                    В WhatsApp допускается только 1 кнопка со ссылкой. Оставьте,
                    пожалуйста одну кнопку ниже.
                    {buttons.map((button) => {
                        if (button.url)
                            return (
                                <MessageButton
                                    {...button}
                                    buttonType={buttonsType}
                                    channel={channel}
                                    key={button.id}
                                />
                            );
                        else return <></>;
                    })}
                </span>
            )}

            <div className={style.inputs}>
                <input
                    type="text"
                    placeholder="Текст кнопки"
                    onChange={(e) => {
                        e.preventDefault();
                        setNewButtonError('');
                        setNewButtonText(e.target.value);
                    }}
                    value={newButtonText || ''}
                />
                {restrictions.haveLinks && (
                    <input
                        type="text"
                        placeholder="ссылка"
                        onChange={(e) => {
                            e.preventDefault();
                            setNewButtonError('');
                            setNewButtonUrl(e.target.value);
                        }}
                        value={newButtonUrl || ''}
                    />
                )}
            </div>
            <button className="button" onClick={handleAddButton}>
                Добавить
            </button>
            <br />

            {newButtonError && <span className="error">{newButtonError}</span>}
        </div>
    );
};

const FormCardTitle = (props: any) => {
    return (
        <>
            {props.type === 'all' && (
                <>
                    <h2>Общая форма</h2>
                    <p>
                        То, что вы впишете здесь будет применено ко всем каналам
                    </p>
                </>
            )}
            {props.type === 'vk' && <h2>Так сообщение будет выглядеть в ВК</h2>}
            {props.type === 'wa' && (
                <h2>Так сообщение будет выглядеть в WhatsApp</h2>
            )}
            {props.type === 'tg' && (
                <h2>Так сообщение будет выглядеть в Телеграме</h2>
            )}
            {props.type === 'sms' && (
                <h2>Так сообщение будет выглядеть в СМС</h2>
            )}
        </>
    );
};

const MessageButton = (props: any) => {
    const { id, channel, buttonType, text, url } = props;
    const dispatch = useAppDispatch();
    const handleDeleteButton = () => {
        if (buttonType === 'normal') {
            dispatch(removeButton({ id, channel }));
        } else {
            dispatch(removeButtonInline({ id, channel }));
        }
    };

    return (
        <div className={style.message_button}>
            {url && (
                <a href={url} onClick={(e) => e.preventDefault()}>
                    <span>{text}</span>
                </a>
            )}
            {!url && <span>{text}</span>}
            <div className={style.buttonDelete} onClick={handleDeleteButton}>
                <img src={deleteIcon} alt="" />
            </div>
        </div>
    );
};

export default MessageForm;
