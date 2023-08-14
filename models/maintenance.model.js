import { sq, DataTypes } from 'sequelize';

sq.define('Maintenance', {
        motif: DataTypes.STRING,
        operateur: DataTypes.STRING,
        description: DataTypes.STRING,
        idAffectation: DataTypes.INTEGER,
        date: {
            type: DataTypes.DATETIME,
            default: DataTypes.NOW
        }
    });

    export { Maintenance }