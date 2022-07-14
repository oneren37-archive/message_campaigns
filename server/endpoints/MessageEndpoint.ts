import { MessageModel } from '../models/MessageModel/MessageModel';

export const AddMessage = (req, res) => {
  new MessageModel()
    .add(req.body)
    .then(() => res.status(200).send(true))
    .catch((e) => res.status(400).send(e));
};

export const GetMessageByCampaignId = (req, res) => {
  new MessageModel()
    .getByCampaignId(req.query.id)
    .then((r) => res.status(200).json(r))
    .catch((e) => res.status(400).send(e));
};
