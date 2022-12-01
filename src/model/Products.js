const { Model, DataTypes } = require('sequelize')

class Products extends Model {
  static init(sequelize){
    super.init({
      nome: DataTypes.STRING,
      senha: DataTypes.DECIMAL,
    }, {
      sequelize
    })
  }
}

module.exports = Products;