export interface IRestrictions {
    maxTextLength: number | typeof Infinity;
    isButtonAvailable: boolean;
    maxButtonsCount: number | typeof Infinity;
    isButtonLinkAvailable: boolean;
    maxButtonTextLength: number | typeof Infinity;
    isButtonInlineAvailable: boolean;
    maxButtonsInlineCount: number | typeof Infinity;
    isButtonInlineLinkAvailable: boolean;
    maxButtonInlineTextLength: number | typeof Infinity;
}

export interface IButton {
    id: string;
    text: string;
    url?: string;
}

export interface IMessageInfo {
    channelType: string;
    text: string;
    buttons: IButton[];
    buttons_inline: IButton[];
    restrictions: IRestrictions;
}

export interface INewMessageState {
    channels: IMessageInfo[];
}
