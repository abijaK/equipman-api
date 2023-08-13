import { sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      telephone: DataTypes.STRING
    });
  
    return user;
  };

// export { User};