import express from 'express';
import cors from 'cors';
import { routes } from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 2024;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', routes);

// app.use('/equip', routes)

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
