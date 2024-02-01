const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8081;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/public', express.static(__dirname + '/public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + '-' + Date.now() + ext);
  },
});
const uploadFile = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', uploadFile.single('profile'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.render('result', { userInfo: req.body, profileImg: req.file });
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
