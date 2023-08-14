import { sq, DataTypes } from 'sequelize';

sq.define('Equipment', {
        designation: DataTypes.STRING,
        model: DataTypes.STRING,
        marque: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        dateAquisition: {
            type: DataTypes.DATETIME,
            default: DataTypes.NOW
        }
    });

    export { Equipment }