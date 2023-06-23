import express from 'express';

const app = express(), 
PORT = process.env.PORT || 3000;

app.get('/', async(req, res) => {
    res.json({ status: true, message: 'Hello Word !'})
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));