const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const connect = require('./util/database');
const User = require('./models/user.model');

const productRouter = require('./routes/product.router');
const userRouter = require('./routes/user.router');
const { signup, signin } = require('./util/auth');

const app = express();

//API ROUTE
app.use(cors());
app.use(bodyParser.json());

app.post('/signup', signup);
app.post('/signin', signin);

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

//SERVER START/ MONGODB
const port = process.env.PORT || 5000;
const start = async () => {
    try {
      await connect()
      app.listen(port, () => {
        console.log(`http://localhost:${port}`)
      })
    } catch (e) {
      console.error(e)
    }
  }
start();