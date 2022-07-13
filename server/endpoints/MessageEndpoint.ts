import { MessageModel } from '../models/MessageModel/MessageModel';

export const AddMessage = (req, res) => {
  new MessageModel()
    .add(req.body)
    .then(() => res.status(200).send(true))
    .catch((e) => res.status(400).send(e));
};
