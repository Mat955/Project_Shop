const express = require('express');
const cors = require('cors');
const config = require('./config');
const path = require('path');
const app = express();
const productRoutes = require('./routes/product.routes');
const mongoose = require('mongoose');
const helmet = require('helmet');
const loadProductsData = require('./ProductsData');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', productRoutes);
app.use(helmet());
app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to the database');
  loadProductsData();
});
db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, function () {
  console.log('Server is running on port:', config.PORT);
});