const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World</h1>
    <p>This is a sample Node.js application.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
