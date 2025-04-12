import express from 'express';
import { convert } from './controllers/convert.controller.js';
import { getInfo } from './controllers/getHost.controller.js';
import connect from './models/connect-database.js';
import userRoute from './routes/user.route.js';
import commentRoute from './routes/comments.route.js';

const app = express();

app.use(express.json());


app.get('/cau1', getInfo);
app.post('/cau2', convert);

//cau 4
app.get('/', (req, res) => {
  res.send("Trang chủ");
});
app.get('/about', (req, res) => {
  res.send("About");
});
app.get('/contact', (req, res) => {
  res.send("Contact");
});
app.get("/abc", (req, res) => {
  res.status(404).send('Trang không tồn tại');
});
// users
app.use('/',userRoute);
// comments
app.use('/',commentRoute);

app.listen(3000, () => {
  connect();
  console.log(`Server started at http://localhost:3000`);
});
