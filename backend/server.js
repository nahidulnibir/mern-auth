const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//express app
const app = express();

//express middleware
app.use(express.urlencoded());
app.use(express.json());

//db connection
const mongoUri = process.env.MONGO_URI;
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port} `));
