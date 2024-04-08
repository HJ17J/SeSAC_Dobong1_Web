const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const { Sequelize } = require('sequelize');

const userModel = require('./models/User');

// config 설정
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const User = userModel(sequelize);

// body-parser 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api 만들기
// GET /api "안녕하세요..." send
app.get('/api', (req, res) => {
  res.send('안녕하세요...');
});

// POST /api/users > user row 하나 추가
app.post('/api/users', async (req, res) => {
  try {
    // /api/users/:name
    // const name = req.params.name;
    // await User.create({ username: name, email: `${name}@test.com` });
    const { username, email } = req.body;
    await User.create({ username, email });
    res.send({ createUser: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'server error' });
  }
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('테이블 생성 완료');
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('sync error!');
    console.log(err);
  });
