import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('wow');
});

app.listen(3000);
