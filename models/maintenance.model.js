import sequelize from '../config/db.config.js';

export const maintenance = sequelize.define('maintenance', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
        motif: DataTypes.STRING,
        operateur: DataTypes.STRING,
        description: DataTypes.STRING,
        idAffectationFk: DataTypes.INTEGER,
        date: {
            type: DataTypes.DATETIME,
            default: DataTypes.NOW
        }
    });