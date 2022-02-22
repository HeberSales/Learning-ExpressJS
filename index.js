const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';


app.get('/', (req, res) => {
    res.send("Hello!");
})

app.listen(PORT, HOST, () => {
    console.log("Example App");
})

//depois de fazer o .env tem que por a biblioteca dele npm install dotenv