import * as path from 'path';
import {
  AddCampaign,
  DeleteCampaign,
  GetCampaigns,
  UpdateCampaign,
} from './endpoints/CampaignEndpoint';
import {
  AddMessage,
  GetMessageByCampaignId,
} from './endpoints/MessageEndpoint';

const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(`${__dirname}../../../client/build/`)));

app.get('/api/campaign', GetCampaigns);
app.post('/api/campaign', AddCampaign);
app.put('/api/campaign', UpdateCampaign);
app.delete('/api/campaign', DeleteCampaign);

app.get('/api/message', GetMessageByCampaignId);
app.post('/api/message', AddMessage);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}../../../client/build/index.html`));
});

app.listen(PORT, () => console.log('сервер запустился'));
