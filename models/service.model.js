import { sq, DataTypes } from 'sequelize';

    sq.define('Service', {
      designation: DataTypes.STRING
    });

export { Service };