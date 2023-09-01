import sequelize from '../config/db.config.js';

export const affectation = sequelize.define('affectation', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    state: { type: DataTypes.BOOLEAN},
    idEquipFk: { type: DataTypes.INTEGER},
    description: { type: DataTypes.STRING},
    idServiceFk: { type: DataTypes.INTEGER},
    amortizationPeriod: { type: DataTypes.INTEGER},
    yearAffectation: { type: DataTypes.DATEONLY},
    dateAffectation: {
        type: DataTypes.DATETIME,
        default: DataTypes.NOW
    }
});