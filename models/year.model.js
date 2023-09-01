import sequelize from '../config/db.config.js';

    sequelize.define('year', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      year: DataTypes.DATEONLY
    });

export { Year };