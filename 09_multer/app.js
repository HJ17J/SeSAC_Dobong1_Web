const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8081;

/* 미들웨어 */
/* view 관련 */
app.set('view engine', 'ejs');
app.set('views', './views');

/* static 폴더 */
// 어떤 경로에 있는 폴더를 어떤 이름으로 사용할 것인지 설정
// app.use(사용할 이름, express.static(실제 폴더 경로))
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/public'));

/* body-parser */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* multer */
const upload = multer({
  dest: 'uploads/',
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(null, path.basename(file.originalname, extension) + Date.now() + extension);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

/* 
  multer 디테일 설정
  - storage: 저장공간 정보
    - diskStorage:  파일을 저장하기 위한 모든 제어기능 제공
    - destination: 저장 경로
    - filename: 파일명
  - limits: 파일 제한
    - fileSize: 파일 사이즈 제한
 */

app.get('/', (req, res) => {
  res.render('index');
});

//app.post('/upload', upload.single('userfile'), (req, res) => {
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  /* 
  {
  fieldname: 'userfile',  // 폼에 정의한 name값
  originalname: '1324862.jpg',  // 원본 파일명
  encoding: '7bit', // file encoding type
  mimetype: 'image/jpeg', // 파일 타입
  destination: 'uploads/',  // 파일 저장 경로
  filename: '52a7f77e92e3f5a62946094dfe7bf6cf', // 저장된 파일명
  path: 'uploads\\52a7f77e92e3f5a62946094dfe7bf6cf',  // 경로 포함한 파일명
  size: 61100 // 파일 크기(byte)
  }
   */
  res.send('업로드 완료😉');
});

app.post('/upload/array', uploadDetail.array('multifiles'), (req, res) => {
  console.log(req.files); //[{..}, {..}] 배열로 요청됨
  console.log(req.body);
  res.send('업로드 완료😉');
});

app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'file1' }, { name: 'file2' }, { name: 'file3' }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    /* 
    {file1:[{}{}], file2:[{}], name 속성: [{},{},..]}
     */
    res.send('업로드 완료😉');
  }
);

/* 동적 파일 업로드 */

app.post('/dynamicUpload', uploadDetail.single('dynamicFile'), (req, res) => {
  console.log(req.file);
  // res.send(req.file);
  res.send({
    title: req.body,
    fileInfo: req.file,
  });
  /* 
    title:
  fileInfo:
   */
});

app.listen(PORT, (req, res) => {
  console.log('http://localhost:' + PORT);
});
