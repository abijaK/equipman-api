import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelizeConfig from './config/db.config.js';

const app = express();
const PORT = process.env.PORT || 2024;
sequelizeConfig.testDbConnection();

//Setup an ORM config

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', async(req, res) => {
    res.json({ status: true, message: 'Hello Word !'})
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
