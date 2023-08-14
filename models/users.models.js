import { sq, DataTypes } from 'sequelize';

sq.define('User', {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      telephone: DataTypes.STRING
    });

export { User };