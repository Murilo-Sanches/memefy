import express from 'express';

const app = express();

const PORT = process.env.PORT || 5555;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () =>
  console.log(`App listening on https://localhost:${PORT}`)
);
