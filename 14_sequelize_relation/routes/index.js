const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// GET /
router.get('/', controller.main);

// GET /players
router.get('/players', controller.getAllPlayer);

// GET /player/:playerId
router.get('/player/:playerId', controller.getPlayer);

// POST /players
router.post('/players', controller.postPlayer);

// PATCH /players/:playerId/team
router.patch('/players/:playerId/team', controller.patchPlayer);
// router.delete('/players/:playerId');

// DELETE /players/:playerId
router.delete('/players/:playerId', controller.deletePlayer);

/* team 모델과 관련된 라우팅 */
// GET /teams
router.get('/teams', controller.getTeams);

// GET /teams/:teamId
router.get('/teams/:teamId', controller.getTeam);

// GET /teams/:teamId/players
router.get('/teams/:teamId/players', controller.getTeamPlayers);

module.exports = router;
