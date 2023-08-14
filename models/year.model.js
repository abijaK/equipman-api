import { sq, DataTypes } from 'sequelize';

    sq.define('Year', {
      year: DataTypes.DATEONLY
    });

export { Year };