/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));
const index = path.join(publicPath, 'index.html');

app.get('*', (req, res) => {
  res.sendFile(index);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});