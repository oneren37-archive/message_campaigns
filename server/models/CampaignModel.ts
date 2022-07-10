import { AbstractModel } from './AbstractModel';

export type CampaignData = {
    id?: number;
    name: string;
    description?: string;
    channels: ['vk'?, 'wa'?, 'tg'?, 'sms'?];
};

export interface ICampaignModel {
    add(data: CampaignData): Promise<any>;
    getAll(): Promise<any>;
    update(data): Promise<any>;
    delete(key: number): Promise<any>;
}

export class CampaignModel extends AbstractModel implements ICampaignModel {
  public async add(data: CampaignData): Promise<any> {
    const { name, description, channels } = data;
    return this.DB.execute(`
                insert into campaign 
                (title, description, vk, wa, tg, sms) 
                values (
                    "${name}",
                    "${description}",
                    "${channels.includes('vk') ? 1 : 0}", 
                    "${channels.includes('wa') ? 1 : 0}", 
                    "${channels.includes('tg') ? 1 : 0}", 
                    "${channels.includes('sms') ? 1 : 0}"
                )`);
  }

  delete(key: number): Promise<any> {
    return this.DB.execute(`delete from campaign where id=${key}`);
  }

  getAll(): Promise<any> {
    return this.DB.execute('select * from campaign')
      .then((res) => res.results)
      .then((result) => result.map((res) => ({
        id: res.id,
        title: res.title,
        description: res.description,
        channels: [
          res.vk ? 'vk' : '',
          res.wa ? 'wa' : '',
          res.tg ? 'tg' : '',
          res.sms ? 'sms' : '',
        ].filter((e) => e),
      })));
  }

  update(data): Promise<any> {
    const {
      id, name, description, channels,
    } = data;
    return this.DB.execute(`
                update campaign 
                set 
                    title="${name}" ,
                    description="${description}",
                    vk=${channels.includes('vk') ? 1 : 0},
                    wa=${channels.includes('wa') ? 1 : 0},
                    tg=${channels.includes('tg') ? 1 : 0},
                    sms=${channels.includes('sms') ? 1 : 0}
                where id=${id} 
        `);
  }
}
