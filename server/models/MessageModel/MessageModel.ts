import { AbstractModel } from '../AbstractModel';
import { IMessageData } from './types';

export interface IMessageModel {
    add(data: IMessageData): Promise<any>;
    getByCampaignId(id: string): Promise<any>;
    // getAll(): Promise<any>;
    // update(data): Promise<any>;
    // delete(key: number): Promise<any>;
}

export class MessageModel extends AbstractModel implements IMessageModel {
  public async add(data: IMessageData): Promise<any> {
    const queries = [];
    const ID = `${new Date().valueOf()}_${Math.random()}`;

    data.channels.forEach((channel) => {
      const nextID = `${channel.channelType}_${ID}`;

      queries.push(`insert into message (id, text, campaign_id, channel) values (
                "${nextID}",
                "${channel.text}",
                "${data.campaign.id}",
                "${channel.channelType}"
            )`);

      channel.buttons.forEach((button) => {
        queries.push(`insert into button (message_id, text, url, is_inline, channel) values (
                    "${nextID}",
                    "${button.text}",
                    "${button.url}",
                    false,
                    "${channel.channelType}"
                )`);
      });

      channel.buttons_inline.forEach((button) => {
        queries.push(`insert into button (message_id, text, url, is_inline, channel) values (
                    "${nextID}",
                    "${button.text}",
                    "${button.url}",
                    true,
                    "${channel.channelType}"
                )`);
      });
    });

    return Promise.all(queries.map((query) => this.DB.execute(query)));
  }

  public async getByCampaignId(id: string): Promise<any> {
    return this.DB.execute(
      `
            select
                message.id as message_id,
                message.text as message_text,
                message.channel as channel,
                button.id as button_id,
                button.text as button_text,
                button.url as button_url,
                button.is_inline as button_is_inline
            from message left join button on (message.id = button.message_id)
            where message.campaign_id = ${id};
          `,
    ).then((res) => {
      const output: any = {};

      res.results.forEach((r: any) => {
        let key = r.message_id.split('_');
        key.shift();
        key = key.join('_');

        if (!output[key]) {
          output[key] = {
            vk: {
              id: '',
              text: '',
              buttons: [],
              buttons_inline: [],
            },
            wa: {
              id: '',
              text: '',
              buttons: [],
              buttons_inline: [],
            },
            tg: {
              id: '',
              text: '',
              buttons: [],
              buttons_inline: [],
            },
            sms: {
              id: '',
              text: '',
              buttons: [],
              buttons_inline: [],
            },
          };
        }
        output[key][r.channel].id = r.message_id;
        output[key][r.channel].text = r.message_text;

        if (r.button_id && r.button_is_inline === 0) {
          output[key][r.channel].buttons.push({
            text: r.button_text,
            url: r.button_url || '',
          });
        } else if (r.button_id && r.button_is_inline === 1) {
          output[key][r.channel].buttons_inline.push({
            text: r.button_text,
            url: r.button_url || '',
          });
        }
      });

      return Object.values(output).map((vals: any) => {
        const data: any = {};
        if (vals.vk && vals.vk.id) data.vk = vals.vk;
        if (vals.wa && vals.wa.id) data.wa = vals.wa;
        if (vals.tg && vals.tg.id) data.tg = vals.tg;
        if (vals.sms && vals.sms.id) data.sms = vals.sms;
        return data;
      });
    });
  }
}
