import sequelize from '../config/db.config.js';

    export const category = sequelize.define('category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      designation: DataTypes.STRING
    });