import express from 'express';

const app = express();
const PORT = 4001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});