import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import sqConfig from './config/db.config.js';
import { user } from './models/users.models.js'

const app = express();
const PORT = process.env.PORT || 2024;
// sqConfig.sequelize();

//Setup an ORM config

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', async(req, res) => {
    await User.findAll()
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
