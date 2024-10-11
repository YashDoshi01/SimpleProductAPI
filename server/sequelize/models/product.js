'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement : true
    },
    name: 
    {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : [2 , 255]
      }
    },
    price:
    {
       type : DataTypes.FLOAT,
       allowNull : false,
       validate : {
        min : 0.01
       }
    },
    description: DataTypes.STRING,
    category: 
    {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : [ 2 , 255]
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Product',
  });
  return Product;
};