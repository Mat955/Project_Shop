const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/products', (req, res) => {
  const data = [
    { id: '1qwerty', title: 'Product 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet, risus eu malesuada maximus, libero.' },
    { id: '2qwertys', title: 'Product 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet, risus eu malesuada maximus, libero.' },
  ]
  res.json(data);
});

app.listen(8000, function () {
  console.log('Server is running on port:', 8000);
});