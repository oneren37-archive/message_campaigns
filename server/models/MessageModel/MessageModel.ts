import { AbstractModel } from '../AbstractModel';
import { IMessageData } from './types';

export interface IMessageModel {
    add(data: IMessageData): Promise<any>;
    // getAll(): Promise<any>;
    // update(data): Promise<any>;
    // delete(key: number): Promise<any>;
}

export class MessageModel extends AbstractModel implements IMessageModel {
  public async add(data: IMessageData): Promise<any> {
    const queries = [];

    data.channels.forEach((channel) => {
      const nextID = `${
        channel.channelType
      }_${new Date().valueOf()}_${Math.random()}`;

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

    // return this.DB.execute(`
    //         insert into campaign
    //         (title, description, vk, wa, tg, sms)
    //         values (
    //             "${name}",
    //             "${description}",
    //             "${channels.includes('vk') ? 1 : 0}",
    //             "${channels.includes('wa') ? 1 : 0}",
    //             "${channels.includes('tg') ? 1 : 0}",
    //             "${channels.includes('sms') ? 1 : 0}"
    //         )`);
  }

  // delete(key: number): Promise<any> {
  //     return this.DB.execute(`delete from campaign where id=${key}`);
  // }
  //
  // getAll(): Promise<any> {
  //     return this.DB.execute('select * from campaign')
  //         .then((res) => res.results)
  //         .then((result) => result.map((res) => ({
  //             id: res.id,
  //             title: res.title,
  //             description: res.description,
  //             channels: [
  //                 res.vk ? 'vk' : '',
  //                 res.wa ? 'wa' : '',
  //                 res.tg ? 'tg' : '',
  //                 res.sms ? 'sms' : '',
  //             ].filter((e) => e),
  //         })));
  // }
  //
  // update(data): Promise<any> {
  //     const {
  //         id, name, description, channels,
  //     } = data;
  //     return this.DB.execute(`
  //             update campaign
  //             set
  //                 title="${name}" ,
  //                 description="${description}",
  //                 vk=${channels.includes('vk') ? 1 : 0},
  //                 wa=${channels.includes('wa') ? 1 : 0},
  //                 tg=${channels.includes('tg') ? 1 : 0},
  //                 sms=${channels.includes('sms') ? 1 : 0}
  //             where id=${id}
  //     `);
  // }
}
