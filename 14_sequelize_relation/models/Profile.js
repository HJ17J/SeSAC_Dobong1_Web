const ProfileModel = function (Sequelize, DataTypes) {
  const Profile = Sequelize.define(
    'Profile',
    {
      profile_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      position: { type: DataTypes.STRING(63), allowNull: false },
      salary: { type: DataTypes.INTEGER, allowNull: false },
    },
    { freezeTableName: true }
  );
  return Profile;
};

module.exports = ProfileModel;
