const express = require('express');
const app = express();
const connect = require('./models/connect-database');
const productRoute = require('./routes/product.route');

app.use(express.json());


app.use('/api/products',productRoute);

app.listen(3000, () => {
    connect();
  console.log(`Server started at http://localhost:3000`);
});