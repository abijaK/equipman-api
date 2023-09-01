import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import sqConfig from './config/db.config.js';
// import { user } from './models/users.models.js'
import { routes } from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 2024;
// sqConfig.sequelize();

//Setup an ORM config

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', routes);

// app.use('/equip', routes)

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
