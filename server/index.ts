import * as path from 'path';
import { TestEndpoint } from './endpoints/TestEndpoint';

const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(`${__dirname}../../../client/build/`)));

app.get('/api/test', TestEndpoint);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}../../../client/build/index.html`));
});

app.listen(PORT, () => console.log('сервер запустился'));
