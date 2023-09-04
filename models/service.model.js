import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

export const service = sequelize.define('service', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
   designation: DataTypes.STRING
    });

    // service.belongsTo(equipment);