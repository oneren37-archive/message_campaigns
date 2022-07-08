import { CampaignModel } from '../models/CampaignModel';

const AddCampaign = (req, res) => {
  new CampaignModel()
    .add(req.body)
    .then(() => res.status(200).send(true))
    .catch((e) => res.status(400).send(e));
};

const UpdateCampaign = (req, res) => {
  new CampaignModel()
    .update(req.body)
    .then(() => res.status(200).send(true))
    .catch((e) => res.status(400).send(e));
};

const DeleteCampaign = (req, res) => {
  new CampaignModel()
    .delete(req.body.id)
    .then(() => res.status(200).send(true))
    .catch((e) => res.status(400).send(e));
};

const GetCampaigns = (req, res) => {
  new CampaignModel()
    .getAll()
    .then((r) => res.status(200).json(r.results))
    .catch((e) => res.status(400).send(e));
};

export {
  GetCampaigns, AddCampaign, DeleteCampaign, UpdateCampaign,
};
