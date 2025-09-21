const express = require('express');
const cookieParser = require('cookie-parser');
const authRouth = require("./routes/auth.routes")
const foodRoute = require("./routes/food.routes")
const app = express();
const imagekit = require("./services/storage.service")

app.use(cookieParser());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRouth)
app.use('/api/food', foodRoute)



module.exports = app 