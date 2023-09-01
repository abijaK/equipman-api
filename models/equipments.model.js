import sequelize from '../config/db.config.js';

export const equipment = sequelize.define('equipment', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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