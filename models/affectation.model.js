import { sq, DataTypes } from 'sequelize';

sq.define('Affectation', {
    state: DataTypes.BOOLEAN,
    idEquipFk: DataTypes.INTEGER,
    description: DataTypes.STRING,
    idServiceFk: DataTypes.INTEGER,
    amortizationPeriod: DataTypes.INTEGER,
    yearAffectation: DataTypes.DATEONLY,
    dateAffectation: {
        type: DataTypes.DATETIME,
        default: DataTypes.NOW
    }
});

    export { Affectation }