const { Model, DataTypes } = require('sequelize');

class Dev extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      github_username: DataTypes.STRING,
      bio: DataTypes.STRING,
      avatar_url: DataTypes.STRING,
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL,
      techs: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Dev;
