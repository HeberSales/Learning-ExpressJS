const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.post('/login', (req, res) => {
    const username = req.body['username'];
    const email = req.body['mail'];

    console.log(username);
    console.log(email);

    res.send("Login!");
})



app.listen(PORT, HOST, () => {
    console.log("Example App");
})

//depois de fazer o .env tem que por a biblioteca dele npm install dotenv