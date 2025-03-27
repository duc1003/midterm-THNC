import express from 'express';
import { Connect } from './model/connect-database.js';
import ProductRoute from './routes/product.routes.js';

const app = express();

app.use(express.json());


app.use('/api/products', ProductRoute);

app.listen(3000, () => {
    Connect();
    console.log("Server started at: http://localhost:3000");
});