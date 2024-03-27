import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('wow wafoiawmjraiovwmeoviwapeiu');
});

app.listen(3000);
