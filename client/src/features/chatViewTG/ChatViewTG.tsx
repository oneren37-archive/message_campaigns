/* eslint-disable */

import './assets/7916.23a5c7c2230d3d3fb53f.css';
import './assets/main.add56e8cd61b21d0a5d2.css';
import './assets/BundleMain.8d4923280934ea122a47.css';
import './assets/override.css';

const ChatViewTG = (props: any) => {
    const { text, buttons, buttonsInline } = props;
    return (
        <div
            className="tg-root theme-dark"
            id="root"
            data-teact-head-id="id9189137454509229"
        >
            <div
                id="UiLoader"
                className="src-components-common-UiLoader-module__root"
                // style="--theme-background-color: #0F0F0F;"
            >
                <div className="Transition full-height fade">
                    <div className="Transition__slide--active">
                        <div id="Main" className="">
                            <div
                                id="MiddleColumn"
                                className="mask-image-disabled"
                                // style="--composer-hidden-scale: 1.16718; --toolbar-hidden-scale: 0.856764; --unpin-hidden-scale: 1.46124; --toolbar-unpin-hidden-scale: 0.68435; --composer-translate-x: 23.1326px; --toolbar-translate-x: -31.5139px; --pattern-color: #0A0A0A8C; --theme-background-color: #0F0F0F;"
                            >
                                <div className="src-components-middle-MiddleColumn-module__background src-components-middle-MiddleColumn-module__withTransition"></div>
                                <div id="middle-column-portals"></div>
                                <div className="messages-layout">
                                    <div className="MiddleHeader">
                                        <div className="Transition slide-fade">
                                            <div className="Transition__slide--active">
                                                <div className="back-button">
                                                    <button
                                                        type="button"
                                                        className="Button smaller translucent round"
                                                        aria-label="Back"
                                                        title="Back"
                                                    >
                                                        <div className="animated-close-icon state-back"></div>
                                                    </button>
                                                </div>
                                                <div className="chat-info-wrapper">
                                                    <div className="ChatInfo">
                                                        <div className="Avatar size-medium color-bg-4 interactive">
                                                            <img
                                                                src="https://thispersondoesnotexist.com/image"
                                                                className="Avatar__media avatar-media opacity-transition slow open shown"
                                                                alt="Fromni"
                                                                decoding="async"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <div className="title">
                                                                <h3 dir="auto">
                                                                    Fromni
                                                                </h3>
                                                            </div>
                                                            <span className="status ">
                                                                <span
                                                                    className="user-status"
                                                                    dir="auto"
                                                                >
                                                                    bot
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-tools">
                                            <div className="HeaderActions">
                                                <button
                                                    type="button"
                                                    className="Button smaller translucent round"
                                                    aria-label="More actions"
                                                    title="More actions"
                                                >
                                                    <i className="icon-more"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Transition slide">
                                        <div className="Transition__slide--active">
                                            <div
                                                className="MessageList custom-scroll no-avatars"
                                                data-normal-height="733"
                                            >
                                                <div className="messages-container">
                                                    <div className="backwards-trigger"></div>

                                                    <div className="message-date-group">
                                                        <div className="sticky-date interactive">
                                                            <span dir="auto">
                                                                June 4
                                                            </span>
                                                        </div>

                                                        <div
                                                            id="message6887"
                                                            className="Message message-list-item first-in-group last-in-group has-inline-buttons open shown"
                                                            data-message-id="6887"
                                                        >
                                                            <div
                                                                className="bottom-marker"
                                                                data-message-id="6887"
                                                            ></div>
                                                            <div className="message-select-control"></div>
                                                            <div className="message-content-wrapper can-select-text">
                                                                <div
                                                                    className="message-content text has-shadow has-solid-background has-appendix"
                                                                    dir="auto"
                                                                >
                                                                    <div
                                                                        className="content-inner"
                                                                        dir="auto"
                                                                    >
                                                                        <p
                                                                            className="text-content with-meta"
                                                                            dir="auto"
                                                                        >
                                                                            {
                                                                                text
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="svg-appendix">
                                                                        <svg
                                                                            width="9"
                                                                            height="20"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <defs>
                                                                                <filter
                                                                                    x="-50%"
                                                                                    y="-14.7%"
                                                                                    width="200%"
                                                                                    height="141.2%"
                                                                                    filterUnits="objectBoundingBox"
                                                                                    id="a"
                                                                                >
                                                                                    <feOffset
                                                                                        dy="1"
                                                                                        in="SourceAlpha"
                                                                                        result="shadowOffsetOuter1"
                                                                                    ></feOffset>
                                                                                    <feGaussianBlur
                                                                                        stdDeviation="1"
                                                                                        in="shadowOffsetOuter1"
                                                                                        result="shadowBlurOuter1"
                                                                                    ></feGaussianBlur>
                                                                                    <feColorMatrix
                                                                                        values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                                                                        in="shadowBlurOuter1"
                                                                                    ></feColorMatrix>
                                                                                </filter>
                                                                            </defs>
                                                                            <g
                                                                                fill="none"
                                                                                fillRule="evenodd"
                                                                            >
                                                                                <path
                                                                                    d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                                                                    fill="#000"
                                                                                    filter="url(#a)"
                                                                                ></path>
                                                                                <path
                                                                                    d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                                                                    fill="#FFF"
                                                                                    className="corner"
                                                                                ></path>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="InlineButtons">
                                                                    {buttonsInline &&
                                                                        buttonsInline
                                                                            .map(
                                                                                (
                                                                                    button: any,
                                                                                    i: number,
                                                                                ) => {
                                                                                    if (
                                                                                        i %
                                                                                            2 ==
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
                                                                                            className="row"
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                        >
                                                                                            <button
                                                                                                type="button"
                                                                                                key={
                                                                                                    first.id
                                                                                                }
                                                                                                className="Button tiny primary has-ripple"
                                                                                            >
                                                                                                <span className="inline-button-text">
                                                                                                    {
                                                                                                        first.text
                                                                                                    }
                                                                                                </span>
                                                                                                {first.url && (
                                                                                                    <i className="icon-arrow-right"></i>
                                                                                                )}
                                                                                                <div className="ripple-container"></div>
                                                                                            </button>
                                                                                            {second && (
                                                                                                <button
                                                                                                    type="button"
                                                                                                    key={
                                                                                                        second.id
                                                                                                    }
                                                                                                    className="Button tiny primary has-ripple"
                                                                                                >
                                                                                                    <span className="inline-button-text">
                                                                                                        {
                                                                                                            second.text
                                                                                                        }
                                                                                                    </span>
                                                                                                    {second.url && (
                                                                                                        <i className="icon-arrow-right"></i>
                                                                                                    )}
                                                                                                    <div className="ripple-container"></div>
                                                                                                </button>
                                                                                            )}
                                                                                        </div>
                                                                                    );
                                                                                },
                                                                            )
                                                                            .filter(
                                                                                (
                                                                                    e: any,
                                                                                ) =>
                                                                                    e,
                                                                            )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="forwards-trigger"></div>
                                                    <div className="fab-trigger"></div>
                                                </div>
                                            </div>
                                            <div className="middle-column-footer">
                                                <div className="Composer shown">
                                                    <div id="message-compose">
                                                        <div className="svg-appendix">
                                                            <svg
                                                                width="9"
                                                                height="20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <defs>
                                                                    <filter
                                                                        x="-50%"
                                                                        y="-14.7%"
                                                                        width="200%"
                                                                        height="141.2%"
                                                                        filterUnits="objectBoundingBox"
                                                                        id="a"
                                                                    >
                                                                        <feOffset
                                                                            dy="1"
                                                                            in="SourceAlpha"
                                                                            result="shadowOffsetOuter1"
                                                                        ></feOffset>
                                                                        <feGaussianBlur
                                                                            stdDeviation="1"
                                                                            in="shadowOffsetOuter1"
                                                                            result="shadowBlurOuter1"
                                                                        ></feGaussianBlur>
                                                                        <feColorMatrix
                                                                            values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                                                            in="shadowBlurOuter1"
                                                                        ></feColorMatrix>
                                                                    </filter>
                                                                </defs>
                                                                <g
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <path
                                                                        d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                                                                        fill="#000"
                                                                        filter="url(#a)"
                                                                    ></path>
                                                                    <path
                                                                        d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                                                                        fill="#FFF"
                                                                        className="corner"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="message-input-wrapper">
                                                            <button
                                                                type="button"
                                                                className="Button bot-commands default translucent round"
                                                                aria-label="Open bot command keyboard"
                                                                title="Open bot command keyboard"
                                                            >
                                                                <i className="icon-bot-commands-filled"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="Button mobile-symbol-menu-button default translucent round"
                                                                aria-label="Choose emoji, sticker or GIF"
                                                                title="Choose emoji, sticker or GIF"
                                                            >
                                                                <i className="icon-smile"></i>
                                                                <i className="icon-keyboard"></i>
                                                            </button>
                                                            <div id="message-input-text">
                                                                <div
                                                                    id="editable-message-text"
                                                                    className="form-control custom-scroll"
                                                                    contentEditable="true"
                                                                    dir="auto"
                                                                    aria-label="Message"
                                                                ></div>
                                                                <div
                                                                    className="form-control custom-scroll clone"
                                                                    dir="auto"
                                                                ></div>
                                                                <span
                                                                    className="placeholder-text"
                                                                    dir="auto"
                                                                >
                                                                    Message
                                                                </span>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                className="Button default translucent round"
                                                                aria-label="Open bot command keyboard"
                                                                title="Open bot command keyboard"
                                                            >
                                                                <i className="icon-bot-command"></i>
                                                            </button>
                                                            <div className="AttachMenu">
                                                                <button
                                                                    id="attach-menu-button"
                                                                    type="button"
                                                                    className="Button AttachMenu--button default translucent round"
                                                                    aria-label="Add an attachment"
                                                                    aria-controls="attach-menu-controls"
                                                                    aria-haspopup="true"
                                                                    title="Add an attachment"
                                                                >
                                                                    <i className="icon-attach"></i>
                                                                </button>
                                                                <div
                                                                    id="attach-menu-controls"
                                                                    className="Menu no-selection AttachMenu--menu fluid"
                                                                    aria-labelledby="attach-menu-button"
                                                                    role="menu"
                                                                >
                                                                    <div className="bubble menu-container custom-scroll bottom right opacity-transition fast">
                                                                        <div
                                                                            role="button"
                                                                            className="MenuItem"
                                                                        >
                                                                            <i className="icon-photo"></i>
                                                                            Photo
                                                                            or
                                                                            Video
                                                                        </div>
                                                                        <div
                                                                            role="button"
                                                                            className="MenuItem"
                                                                        >
                                                                            <i className="icon-document"></i>
                                                                            File
                                                                        </div>
                                                                        <div
                                                                            role="button"
                                                                            className="MenuItem"
                                                                        >
                                                                            <i className="icon-poll"></i>
                                                                            Poll
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="Button record default secondary round"
                                                        aria-label="Record voice message"
                                                        title="Record voice message"
                                                    >
                                                        <i className="icon-send"></i>
                                                        <i className="icon-schedule"></i>
                                                        <i className="icon-microphone-alt"></i>
                                                        <i className="icon-check"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="Menu no-selection BotKeyboardMenu">
                                                <div
                                                    className="menu-container custom-scroll bottom right opacity-transition fast open shown"
                                                    // style="transform-origin: right bottom;"
                                                >
                                                    <div className="content">
                                                        {buttons &&
                                                            buttons
                                                                .map(
                                                                    (
                                                                        button: any,
                                                                        i: number,
                                                                    ) => {
                                                                        if (
                                                                            i %
                                                                                2 ==
                                                                            1
                                                                        )
                                                                            return;
                                                                        const first =
                                                                            button;
                                                                        const second =
                                                                            buttons[
                                                                                i +
                                                                                    1
                                                                            ];
                                                                        return (
                                                                            <div className="row">
                                                                                <button
                                                                                    type="button"
                                                                                    className="Button default primary has-ripple"
                                                                                >
                                                                                    {
                                                                                        first.text
                                                                                    }
                                                                                    <div className="ripple-container"></div>
                                                                                </button>
                                                                                {second && (
                                                                                    <button
                                                                                        type="button"
                                                                                        className="Button default primary has-ripple"
                                                                                    >
                                                                                        {
                                                                                            second.text
                                                                                        }
                                                                                        <div className="ripple-container"></div>
                                                                                    </button>
                                                                                )}
                                                                            </div>
                                                                        );
                                                                    },
                                                                )
                                                                .filter(
                                                                    (e: any) =>
                                                                        e,
                                                                )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="src-components-middle-FloatingActionButtons-module__root src-components-middle-FloatingActionButtons-module__no-extra-shift">
                                        <div className="src-components-middle-ScrollDownButton-module__root src-components-middle-FloatingActionButtons-module__unread">
                                            <button
                                                type="button"
                                                className="Button src-components-middle-ScrollDownButton-module__button default secondary round"
                                                aria-label="Go to bottom"
                                                title="Go to bottom"
                                            >
                                                <i className="src-components-middle-ScrollDownButton-module__icon icon-arrow-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div id="RightColumn-wrapper" className="">
                                <div className="overlay-backdrop"></div>
                                <div id="RightColumn">
                                    <div className="RightHeader">
                                        <button
                                            type="button"
                                            className="Button close-button smaller translucent round"
                                            aria-label="Back"
                                            title="Back"
                                        >
                                            <div className="animated-close-icon state-back no-transition"></div>
                                        </button>
                                        <div className="Transition none"></div>
                                    </div>
                                    <div className="Transition none"></div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatViewTG;
