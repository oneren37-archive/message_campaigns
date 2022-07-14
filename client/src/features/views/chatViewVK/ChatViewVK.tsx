/* eslint-disable */
import React from 'react';

// import './assets/common.8f1038b200980a03bd3e.css';
import './assets/legacy.766a9732cbda281e99a7.css';
import './assets/mail.3eb228a6022129042aac.css';
import './assets/variables.02ab01a371470db8d7ff.css';
import './assets/vkui.9ef3a6c2c26dce4f3902.css';

import './assets/override.css';

const ChatViewVK = (props: any) => {
    const { text, buttons, buttonsInline } = props;
    return (
        <>
            <div className="vk-root messenger__content">
                <div className="messenger__body ScrollView">
                    <div className="messenger__spacer"></div>
                    <div className="messenger__convoList">
                        <div className="mailScrap mailScrap_peer mailScrap_reachedAfter">
                            <div className="mailScrap__loading mailScrap__loading_before">
                                <div className="Spinner Icon Icon_spinner"></div>
                            </div>
                            <div className="mailScrap__items mailScrap__items_peer">
                                <div className="load_before">
                                    <div className="msg msg_id_685925">
                                        <div
                                            className="Avatar Avatar--loaded Avatar--mode-both Avatar--images-1 Avatar--borderRadius-full Avatar--theme-2 msg__avatar Avatar--size-40"
                                            role="img"
                                        >
                                            <div className="Avatar__content">
                                                <div className="Avatar__image Avatar__image-1"></div>
                                                <div className="Avatar__text">
                                                    С
                                                </div>
                                            </div>
                                        </div>
                                        <div className="msg__content">
                                            <div className="msg__head">
                                                <a
                                                    className="msg__author"
                                                    href="/sberkot"
                                                >
                                                    Fromni
                                                </a>
                                                <div className="msg__date">
                                                    30 июн в 14:18
                                                </div>

                                                <div className="msg__check Icon Icon_check"></div>
                                                <div className="msg__star"></div>
                                            </div>
                                            <div className="msg__text">
                                                <div className="msg_item _msg single_msg_item msg__text">
                                                    <div className="mi_cont">
                                                        <div className="mi_body">
                                                            <div className="mi_text">
                                                                {text}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="msg__keyboard">
                                                <div className="BotsKeyboard__main">
                                                    {buttonsInline &&
                                                        buttonsInline
                                                            .map(
                                                                (
                                                                    button: any,
                                                                    i: number,
                                                                ) => {
                                                                    if (
                                                                        i % 2 ==
                                                                        1
                                                                    )
                                                                        return;
                                                                    const first =
                                                                        button;
                                                                    const second =
                                                                        buttonsInline[
                                                                            i +
                                                                                1
                                                                        ];
                                                                    return (
                                                                        <div
                                                                            className="BotsKeyboard__row"
                                                                            key={
                                                                                i
                                                                            }
                                                                        >
                                                                            <button
                                                                                className="BotsKeyboard__button BotsKeyboard__button--primary Btn Btn_theme_none Btn_size_normal"
                                                                                type="button"
                                                                                data-position="0,0"
                                                                                key={
                                                                                    first.id
                                                                                }
                                                                            >
                                                                                <div className="Btn__text">
                                                                                    {
                                                                                        first.text
                                                                                    }
                                                                                </div>
                                                                            </button>
                                                                            {second && (
                                                                                <button
                                                                                    className="BotsKeyboard__button BotsKeyboard__button--primary Btn Btn_theme_none Btn_size_normal"
                                                                                    type="button"
                                                                                    data-position="0,0"
                                                                                    key={
                                                                                        second.id
                                                                                    }
                                                                                >
                                                                                    <div className="Btn__text">
                                                                                        {
                                                                                            second.text
                                                                                        }
                                                                                    </div>
                                                                                </button>
                                                                            )}
                                                                        </div>
                                                                    );
                                                                },
                                                            )
                                                            .filter(
                                                                (e: any) => e,
                                                            )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="msg__restore"></div>
                                    </div>
                                </div>

                                <div className="mailScrap__empty mailScrap__empty_peer">
                                    История сообщений пуста.
                                </div>

                                <div className="mailScrap__loading mailScrap__loading_after">
                                    <div className="Spinner Icon Icon_spinner"></div>
                                </div>
                                <div className="MailPreSendList__box"></div>
                                <div className="typing typing_dimmed typing_id_curConvo typing_empty">
                                    <div className="typing__names"></div>
                                </div>
                                <div className="mailScrap__systemMessage"></div>
                                <div className="mailScrap__loading mailScrap__loading_center">
                                    <div className="Spinner Icon Icon_spinner"></div>
                                </div>
                            </div>
                        </div>
                        <div className="messenger__spinner">
                            <div className="Spinner Icon Icon_spinner"></div>
                        </div>
                    </div>
                    <div className="messenger__footer">
                        <div className="messenger__mrbox"></div>
                        <div className="messenger__write">
                            <form
                                className="uMailWrite uMailWrite_canAttachMoney uMailWrite_canAttachPoll uMailWrite_keyboard"
                                method="POST"
                                action="/mail?act=send&amp;to=-157369801&amp;hash=1657445743_5fa00487df4366f08d&amp;from=dialog"
                            >
                                <div className="uMailWrite__toBottom">
                                    <div className="uMailWrite__toBottomIcon Icon Icon_arrowDown"></div>
                                </div>
                                <div className="uMailWrite__reply">
                                    <button
                                        type="button"
                                        className="MailButton uMailWrite__replyClose"
                                    ></button>
                                </div>
                                <div className="uMailWrite__attachments uMailWrite__attachments_-157369801 _preventMenuOpen">
                                    <div
                                        className="cp_attached_wrap attached_wrap_empty"
                                        id="attached_wrap"
                                    ></div>
                                </div>

                                <div className="uMailWrite__main">
                                    <div className="uMailWrite__button uMailWrite__buttonAttach uMailWrite__button_disabled false">
                                        <div
                                            className="Unfold Unfold_position_bottomLeft Unfold_asIcon"
                                            data-name="uMailWrite_attachments"
                                        >
                                            <div className="Unfold__trigger">
                                                <div
                                                    aria-hidden="true"
                                                    className="svgIcon svgIcon-add_circle_outline_28"
                                                >
                                                    <svg
                                                        fill="none"
                                                        height="28"
                                                        viewBox="0 0 28 28"
                                                        width="28"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14 2a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H9a1 1 0 1 1 0-2h4V9a1 1 0 0 1 1-1z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uMailWrite__button uMailWrite__buttonKeyboard uMailWrite__buttonKeyboard_active">
                                        <div className="uMailWrite__buttonKeyboardIcon"></div>
                                    </div>
                                    <div className="uMailWrite__button uMailWrite__buttonStickers">
                                        <div className="uMailWrite__buttonStickersIcon Icon_sticker">
                                            <div
                                                aria-hidden="true"
                                                className="svgIcon svgIcon-smile_outline_28"
                                            >
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 28"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        id="smile_outline_28__Page-1"
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g id="smile_outline_28__smile_outline_28">
                                                            <path d="M0 0h28v28H0z"></path>
                                                            <path
                                                                d="M14 26a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm0-2a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-4.39-5.9a1 1 0 1 1 1.46-1.37 4 4 0 0 0 5.85 0 1 1 0 1 1 1.47 1.36l-.3.3a6 6 0 0 1-8.48-.3Zm7.77-4.85a1.63 1.63 0 1 1 0-3.25 1.63 1.63 0 0 1 0 3.25Zm-6.75 0a1.63 1.63 0 1 1 0-3.25 1.63 1.63 0 0 1 0 3.25Z"
                                                                id="smile_outline_28__Icon-Color"
                                                                fill="currentColor"
                                                                fillRule="nonzero"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="uMailWrite__buttonStickersIcon Icon_sticker Icon_active">
                                            <div
                                                aria-hidden="true"
                                                className="svgIcon svgIcon-smile_outline_28"
                                            >
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 28"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        id="smile_outline_28__Page-1"
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g id="smile_outline_28__smile_outline_28">
                                                            <path d="M0 0h28v28H0z"></path>
                                                            <path
                                                                d="M14 26a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm0-2a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-4.39-5.9a1 1 0 1 1 1.46-1.37 4 4 0 0 0 5.85 0 1 1 0 1 1 1.47 1.36l-.3.3a6 6 0 0 1-8.48-.3Zm7.77-4.85a1.63 1.63 0 1 1 0-3.25 1.63 1.63 0 0 1 0 3.25Zm-6.75 0a1.63 1.63 0 1 1 0-3.25 1.63 1.63 0 0 1 0 3.25Z"
                                                                id="smile_outline_28__Icon-Color"
                                                                fill="currentColor"
                                                                fillRule="nonzero"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="uMailWrite__button uMailWrite__buttonSend uMailWrite__buttonSend_showVoiceRecord uMailWrite__buttonSend_canVoiceRecord"
                                        type="submit"
                                    >
                                        <div className="uMailWrite__buttonSendIcon Icon_send">
                                            <div
                                                aria-hidden="true"
                                                className="svgIcon svgIcon-send_28"
                                            >
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 28"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        id="send_28__Page-2"
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g id="send_28__send_28">
                                                            <path
                                                                id="send_28__Rectangle-76"
                                                                d="M0 0h28v28H0z"
                                                            ></path>
                                                            <path
                                                                d="M6.93 18.12a42.81 42.81 0 0 0-1.43 4.31c-.62 2.6-1.07 3.18 1.23 1.95 2.29-1.24 13.38-7.35 15.86-8.71 3.22-1.77 3.26-1.64-.18-3.52C19.8 10.72 8.83 4.76 6.73 3.6c-2.1-1.17-1.85-.65-1.23 1.95.2.84.68 2.29 1.46 4.35a4.4 4.4 0 0 0 3.28 2.77l6.44 1.23a.11.11 0 0 1 0 .22l-6.45 1.23a4.4 4.4 0 0 0-3.3 2.78Z"
                                                                id="send_28__Mask"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="uMailWrite__buttonSendIcon Icon_send Icon_active">
                                            <div
                                                aria-hidden="true"
                                                className="svgIcon svgIcon-send_28"
                                            >
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 28"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        id="send_28__Page-2"
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g id="send_28__send_28">
                                                            <path
                                                                id="send_28__Rectangle-76"
                                                                d="M0 0h28v28H0z"
                                                            ></path>
                                                            <path
                                                                d="M6.93 18.12a42.81 42.81 0 0 0-1.43 4.31c-.62 2.6-1.07 3.18 1.23 1.95 2.29-1.24 13.38-7.35 15.86-8.71 3.22-1.77 3.26-1.64-.18-3.52C19.8 10.72 8.83 4.76 6.73 3.6c-2.1-1.17-1.85-.65-1.23 1.95.2.84.68 2.29 1.46 4.35a4.4 4.4 0 0 0 3.28 2.77l6.44 1.23a.11.11 0 0 1 0 .22l-6.45 1.23a4.4 4.4 0 0 0-3.3 2.78Z"
                                                                id="send_28__Mask"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="uMailWrite__buttonVoiceIcon">
                                            <div
                                                aria-hidden="true"
                                                className="svgIcon svgIcon-voice_outline_28"
                                            >
                                                <svg
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 28"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        id="voice_outline_28__Page-1"
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g id="voice_outline_28__voice_outline_28">
                                                            <path d="M0 0h28v28H0z"></path>
                                                            <path
                                                                d="M23 12a1 1 0 0 1 1 1 10 10 0 0 1-9 9.95V25a1 1 0 0 1-2 0v-2.05A10 10 0 0 1 4 13a1 1 0 0 1 2 0 8 8 0 1 0 16 0 1 1 0 0 1 1-1ZM14 2a6 6 0 0 1 6 6v5a6 6 0 1 1-12 0V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v5a4 4 0 1 0 8 0V8a4 4 0 0 0-4-4Z"
                                                                id="voice_outline_28__Icon-Color"
                                                                fill="currentColor"
                                                                fillRule="nonzero"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="uMailWrite__buttonSendIcon Icon Icon_spinner"></div>
                                        <div className="uMailWrite__SVGIcon uMailWrite__SVGIcon_accept"></div>
                                        <div className="uMailWrite__SVGIcon uMailWrite__SVGIcon_remove"></div>
                                        <div className="uMailWrite__SVGIcon uMailWrite__SVGIcon_templates"></div>
                                        <div className="uMailWrite__SVGIcon uMailWrite__SVGIcon_templatesActive"></div>
                                    </button>
                                    <div className="uMailWrite__textareaContainer">
                                        <textarea
                                            className="uMailWrite__textarea"
                                            name="message"
                                            placeholder="Ваше сообщение"
                                        ></textarea>
                                        <div className="uMailWrite__textareaGhost"></div>
                                    </div>
                                </div>
                                <div className="uMailWrite__popupStickers _preventMenuOpen">
                                    <div
                                        className="stickersHints"
                                        data-target=""
                                    >
                                        <div className="stickersHints__arrow"></div>
                                        <div className="stickersHints__callout scroller_wrap">
                                            <div className="stickersHints__content scroller_cont"></div>
                                        </div>
                                    </div>
                                    <div className="uMailWrite__keyboard ScrollView uMailWrite__keyboard_open">
                                        <div className="BotsKeyboard__main">
                                            {buttons &&
                                                buttons
                                                    .map(
                                                        (
                                                            button: any,
                                                            i: number,
                                                        ) => {
                                                            if (i % 2 == 1)
                                                                return;
                                                            const first =
                                                                button;
                                                            const second =
                                                                buttons[i + 1];
                                                            return (
                                                                <div
                                                                    className="BotsKeyboard__row"
                                                                    key={i}
                                                                >
                                                                    <button
                                                                        className="BotsKeyboard__button BotsKeyboard__button--positive Btn Btn_theme_none Btn_size_normal"
                                                                        type="button"
                                                                        data-position="0,0"
                                                                        key={
                                                                            first.id
                                                                        }
                                                                    >
                                                                        <div className="Btn__text">
                                                                            {
                                                                                first.text
                                                                            }
                                                                        </div>
                                                                    </button>
                                                                    {second && (
                                                                        <button
                                                                            className="BotsKeyboard__button BotsKeyboard__button--positive Btn Btn_theme_none Btn_size_normal"
                                                                            type="button"
                                                                            data-position="0,0"
                                                                            key={
                                                                                second.id
                                                                            }
                                                                        >
                                                                            <div className="Btn__text">
                                                                                {
                                                                                    second.text
                                                                                }
                                                                            </div>
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            );
                                                        },
                                                    )
                                                    .filter((e: any) => e)}
                                        </div>
                                    </div>
                                    <div className="uMailWrite__templates">
                                        <div className="uMailWrite__templatesHeader">
                                            Шаблоны
                                            <a
                                                className="uMailWrite__templatesAdd"
                                                href="/mail?act=template&amp;from=-157369801"
                                            >
                                                <div className="Icon Icon_plus"></div>
                                            </a>
                                        </div>
                                        <div className="uMailWrite__templatesBody ScrollView"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="messenger__acts">
                            <div className="mailActs">
                                <div className="mailActs__close Icon Icon_close12"></div>
                                <div className="mailActs__counter"></div>

                                <div className="mailActs__buttons">
                                    <div className="mailActs__buttonsIn">
                                        <button className="Btn Btn_theme_small mailActs__button mailActs__button_type_reply">
                                            Ответить
                                        </button>
                                        <button className="Btn Btn_theme_small mailActs__button mailActs__button_type_forward">
                                            Переслать
                                        </button>
                                    </div>
                                    <div className="mailActs__chevron">
                                        <div className="mailActs__chevronIn">
                                            <button
                                                className="mailActs__icon mailActs__icon_type_edit"
                                                aria-label="Редактировать сообщение"
                                            ></button>
                                            <button
                                                className="mailActs__icon mailActs__icon_type_pin"
                                                aria-label="Закрепить сообщение"
                                            ></button>
                                            <button
                                                className="mailActs__icon mailActs__icon_type_important"
                                                aria-label="Отметить как важное"
                                            ></button>
                                            <button
                                                className="mailActs__icon mailActs__icon_type_remove"
                                                aria-label="Удалить"
                                            ></button>
                                            <button
                                                className="mailActs__icon mailActs__icon_type_spam"
                                                aria-label="Спам"
                                            ></button>
                                        </div>
                                        <div className="mailActs__chevronMore">
                                            <div className="mailActs__chevronMoreIcon"></div>
                                            <div className="mailActs__chevronList">
                                                <div className="mailActs__chevronListItem mailActs__chevronListItem_type_edit">
                                                    Редактировать сообщение
                                                </div>
                                                <div className="mailActs__chevronListItem mailActs__chevronListItem_type_pin">
                                                    Закрепить сообщение
                                                </div>
                                                <div className="mailActs__chevronListItem mailActs__chevronListItem_type_important">
                                                    Отметить как важное
                                                </div>
                                                <div className="mailActs__chevronListItem mailActs__chevronListItem_type_remove">
                                                    Удалить
                                                </div>
                                                <div className="mailActs__chevronListItem mailActs__chevronListItem_type_spam">
                                                    Спам
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatViewVK;
