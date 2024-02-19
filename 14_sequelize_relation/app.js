const express = require('express');
const router = require('./routes/index');
const { sequelize } = require('./models');
const app = express();
const PORT = 8081;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
