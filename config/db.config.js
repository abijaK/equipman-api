import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI,
    {
        dialect:'postgres',
        dialectOptions:{
            timezone:'Etc/GMT+2'
        },
        logging: false
    });

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to BD has been established successfully!');
    } catch (error) {
        console.error('Error: Unable to connect to the database!');
    }
};

export default { testDbConnection };