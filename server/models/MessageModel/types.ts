export interface ICampaign {
    id: number;
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
}

export interface IMessageData {
    channels: IMessageInfo[];
    campaign: ICampaign;
}
