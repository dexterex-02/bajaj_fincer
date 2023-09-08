const express = require('express');
const router = require('./route.js');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(router);

app.get('/', async (req, res) =>
{
    res.status(201).send('Hello world!');
});

app.listen(port, () =>
{
    console.log(`Server is live at port no. ${port}`);
});
