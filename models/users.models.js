import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import {service} from './service.model.js'


export const user = sequelize.define('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName:{
        type:DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      active: sequelize.Sequelize.BOOLEAN,
      admin: sequelize.Sequelize.BOOLEAN
    },{
      // forbides userModal name to be pluralized
        freezeTableName: true,
        
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    user.hasOne(service, {
      foreignKey: 'serviceFk'
    });
    service.belongsTo(user);
    
    // Allow to create user table
    sequelize.sync();