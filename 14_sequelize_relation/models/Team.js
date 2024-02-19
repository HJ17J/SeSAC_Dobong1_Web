const TeamModel = function (Sequelize, DataTypes) {
  const Team = Sequelize.define(
    'Team',
    {
      team_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(63), allowNull: false },
    },
    { freezeTableName: true }
  );
  return Team;
};

module.exports = TeamModel;
