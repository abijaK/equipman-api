import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI,
    {
        dialect:'postgresql',
        dialectOptions:{
            timezone:'Etc/GMT+2'
        },
        logging: true
    });

        try {
            sequelize.authenticate();
            console.log('Connection to BD has been established successfully!');
        } catch (error) {
            console.error('Error: Unable to connect to the database!');
        }

export default sequelize;

// Allows to update the schema without losing existing data
(async () => {
    await sequelize.sync({alter: true})()
})

// Prevents losing existing data when server is running
sequelize.sync({ force: false })
.then(() => console.log('Right, re-sync done!'));