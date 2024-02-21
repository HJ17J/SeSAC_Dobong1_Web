'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js')['development'];
const db = {};

// (1) Sequelize 클래스를 이용하여 sequelize 인스턴스 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// (2) 모델 불러오기, seqeulize 인스턴스와 Sequelize 모듈 전달
const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require('./Profile')(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);

// (3) 모델 간 관계 설정
// hasOne, hasMany, belongTo, belongsMany

// (3-1) 1:1 관계 설정, Player : Profile
// Player의 PK가 Profile의 FK가 됨 (Profile가 Player에 속해 있음)
PlayerModel.hasOne(ProfileModel, {
  foreignKey: 'player_id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});
ProfileModel.belongsTo(PlayerModel, {
  foreignKey: 'player_id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

// (3-2) 1:N 관계 설정, Team : Player
// Team의 PK가 Player의 FK가 됨 (한 Team에 여러 Player가 속해 있음)
TeamModel.hasMany(PlayerModel, {
  sourceKey: 'team_id',
  foreignKey: 'teamid',
});
PlayerModel.belongsTo(TeamModel, {
  targetKey: 'team_id',
  foreignKey: 'teamid',
});

// (3-3) N:M 관계 설정, Game : Team
// 하나의 팀은 여러 경기를 할 수 있고, 하나의 경기에는 여러 팀(두 팀)이 참여
TeamModel.belongsToMany(GameModel, { through: TeamGameModel, foreignKey: 'team_id' });
GameModel.belongsToMany(TeamModel, { through: TeamGameModel, foreignKey: 'game_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// (4) DB 객체에 모델 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;

module.exports = db;
