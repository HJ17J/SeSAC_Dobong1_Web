// const models = require('../models/index');
const { Op } = require('sequelize');
const { Player, Profile, Team } = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.getAllPlayer = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send({ playerList: players });
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// GET /player/:playerId
// 선수 한 명 조회 (Player, Profile)
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); //{playerId:1}
    const { playerId } = req.params;
    const player = await Player.findOne(
      {
        where: { player_id: playerId },
      },
      {
        // include: 두 테이블을 합쳐서 보여줌 (default: inner join)
        include: [{ model: Profile }],
      }
    );
    res.send({ playerInfo: player });
  } catch (err) {
    console.log('err', err);
  }
};

// POST /players
exports.postPlayer = async (req, res) => {
  try {
    const { name, age, teamid } = req.body;
    const newPlayer = await Player.create({
      // 보내려는 변수와 컬럼명이 동일한 경우 k:v 형태일 필요 X
      name,
      age,
      teamid,
    });
    console.log(newPlayer);
    res.json(newPlayer);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// PATCH /players/:plyaerId/team
// {playerId} req.params, 어떤 선수를
// {teamId} req.body, 어떤 팀으로 변경할 건지
exports.patchPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const { teamid } = req.body;
    const updatedPlayer = await Player.update(
      {
        teamid,
      },
      {
        where: { player_id: playerId },
      }
    );
    console.log(updatedPlayer);
    res.json(updatedPlayer);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// DELETE /player/:palyerId
exports.deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const isDeleted = await Player.destroy({
      where: {
        player_id: playerId,
      },
    });
    if (isDeleted) {
      res.send('삭제 성공');
    } else {
      res.send('삭제 실패');
    }
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// GET /teams
exports.getTeams = async (req, res) => {
  try {
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;
    // sort=name_asc >> 전체 팀 조회하여 이름 순으로 정렬
    // search=[팀이름] >> 특정 팀 조회
    if (sort === 'name_asc') {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'ASC']], // ORDER BY NAME ASC
      });
    } else if (search) {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: { name: { [Op.like]: `%${search}%` } },
      });
    } else {
      // sort에 name_asc 외의 문자열이 들어오거나,
      // sort search가 전달되지 않았을 때,
      // Team 테이블의 team_id, name 보여주기
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
    }
    // 못 찾았을 경우 >> teams=[], or [{},{}]
    if (teams.length === 0) res.send('팀을 찾지 못했습니다. 다시 검색해주세요.');
    else res.send(teams);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// GET /teams/:teamId
exports.getTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findOne({
      where: { team_id: teamId },
    });
    res.send(team);
  } catch (err) {
    res.status(500).send('server error');
  }
};

// GET /teams/:teamId/players
exports.getTeamPlayers = async (req, res) => {
  try {
    const { teamId } = req.params;
    // 팀 정보 필요X 특정 팀의 선수 정보만 확인
    // const teamPlayers = await Player.findAll({
    //   where: { teamid: teamId },
    // });
    // 팀 정보 필요O
    const teamPlayers = await Team.findAll({
      include: [{ model: Player }],
      where: { team_id: teamId },
    });
    res.send(teamPlayers);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};
