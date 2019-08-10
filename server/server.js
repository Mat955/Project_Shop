const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();
const productRoutes = require('./routes/product.routes');
const mongoose = require('mongoose');
const helmet = require('helmet');
const loadTestProduct = require('./testProducts');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', productRoutes);
app.use(helmet());

mongoose.connect(config.DB, { userNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('Connected to the database'));
loadTestProduct();
db.on('error', (err) => console.log('Error ' + err));


app.listen(config.PORT, function () {
  console.log('Server is running on port:', config.PORT);
});