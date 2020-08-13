const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/test-api', (_, res) => {
  res.send('Who am I?');
});

app.listen(4001, () => console.log("Listening on 4000"));
