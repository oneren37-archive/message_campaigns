import { IButton } from '../types';
import { useAppDispatch } from '../../../app/hooks';
import { useState } from 'react';
import { addButton, addButtonInline } from '../newMessageSlice';
import style from '../assets/style.module.css';
import MessageButton from './MessageButton';

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

        setNewButtonText('');
        setNewButtonUrl('');
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
                        <span className="error" key={button.id}>
                            Текст кнопки{' '}
                            <MessageButton
                                {...button}
                                buttonType={buttonsType}
                                channel={channel}
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

export default ButtonsForm;
