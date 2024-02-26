const UserModel = function (Sequelize, DataTypes) {
  const User = Sequelize.define(
    'User',
    {
      usercode: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      id: { type: DataTypes.STRING(15), allowNull: false },
      pw: { type: DataTypes.STRING(255), allowNull: false },
      name: { type: DataTypes.STRING(15), allowNull: false },
    },
    { freezeTableName: true, timestamps: false }
  );
  return User;
};

module.exports = UserModel;
