const express = require('express');
const app = express();
const PORT = 4001;
const { handler } = require('./lambda.js');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post('/endpoint', async(req, res) => {
  const result = await handler({
    body: req.body,
    headers: req.headers,
    httpMethod: 'POST',
    path: '/endpoint'
  });

  console.log("Result from proxy:::", result);
  res.status(result.statusCode).send(result.body);
})