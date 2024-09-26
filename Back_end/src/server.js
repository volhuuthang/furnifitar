require('dotenv').config();
const express = require('express');
const app = express();
const authrouter = require('./router/auth.router');
const routes = require("./router/main.router");
const connectDB = require('./config/connectdb');

const port= process.env.POST || 5000
const localhost = process.env.HOST;


console.log(port)
console.log(localhost)

app.use(express.json())


connectDB();
app.use(routes)
app.use(authrouter)




app.listen(port, localhost, () => {
    console.log(`http://${localhost}:${port}`);
})