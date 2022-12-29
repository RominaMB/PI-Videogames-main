const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID, // Universal Unique Identifier
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // Genera un id por default
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descriptionS: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING 
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
  },
  {
    timestamps: false
  });
};
