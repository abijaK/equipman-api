import { sq, DataTypes } from 'sequelize';

    sq.define('Category', {
      designation: DataTypes.STRING
    });

export { Category };