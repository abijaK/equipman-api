import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
    const equipment = sequelize.define('Equipment', {
        designation: DataTypes.STRING,
        model: DataTypes.STRING,
        marque: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        dateAcquisition: {
            type: DataTypes.DATETIME,
            default: DataTypes.NOW
        }
    });

    return equipment;
}