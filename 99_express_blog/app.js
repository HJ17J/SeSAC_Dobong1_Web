const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 8081;

/* 
    temp db
    임시 데이터를 배열 형ca태로 만들어서 화면에 띄워줌
 */

let tempDB = [
  {
    contentID: 1,
    title: 'The Little Prince- Antoine de Saint-Exupéry',
    content:
      'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    img: null, //null or path()
  },
  {
    contentID: 2,
    title: '반 고흐, 영혼의 편지',
    content:
      '지도에서 도시나 마을을 가르키는 검은 점을 보면 꿈을 꾸게 되는 것처럼, 별이 반짝이는 밤하늘은 늘 나를 꿈꾸게 한다. 그럴 때 묻곤 하지. 왜 프랑스 지도 위에 표시된 감은 점에게 가듯 창공에 반짝이는 저 별에게 갈 수 없는 것일까? 타라스콩이나 루앙에 가려면 기차를 타야 하는 것처럼, 별까지 가기 위해서는 죽음을 맞이해야 한다. 증기선이나 합승마차, 철도 등이 지상의 운송수단이라면, 콜레라, 결핵, 암 등은 천상의 운송수단인지도 모른다. 늙어서 평화롭게 죽는다는 건 별까지 걸어간다는 뜻이지.',
    img: null, //null or path()
  },
  {
    contentID: 3,
    title: '모순 - 양귀자',
    content:
      '나는 나인 것이다. 모든 인간이 똑같이 살 필요도 없지만, 그렇다고 똑같이 살지 않기 위해 억지로 발버둥칠 필요도 없는 것이다. 이제 나는 더 이상 나를 학대하지 않기로 했다. 나는 특별하고 한적한 오솔길을 찾는 대신 많은 인생 선배들이 걸어간 길을 택하기로 했다. 삶의 비밀은 그 보편적인 길에 더 많이 묻혀 있을 것이라 확신하고 있으므로.',
    img: null, //null or path()
  },
  {
    contentID: 4,
    title: '블루 캐슬 - 루시 모드 몽고메리',
    content:
      '자 어떻습니까, 밤하늘에 별들이 빛나는 아래에서 그리고 태양이 지는 황혼의 고즈넉한 정적 속에서 태곳적 그대로의 모습을 간직한 저기에 깃들어 있는 소박하면서도 자꾸만 못 견디게 보고 싶어지는 아름다움을 발견하셨습니까? 늙은 소나무 가지에서 이는 오묘한 하프의 선율이 들리십니까? 전나무들이 노래하는 나직한 노랫소리는요? 양지바른 모퉁이에서 태양의 싱싱함을 담뿍 내뿜는 이끼의 향기가 느껴지십니까? 촉촉하게 젖은 개울가 고사리에 어려 있는 생명수의 싱싱한 냄새가 모든 답답함을 상쾌하게 해갈해주지 않습니까?',
    img: null, //null or path()
  },
];

const userID = 'hyeon';

// 미들웨어 설정
/* 
    미들웨어란?
    요청과 응답 사이에서 중간 다리 역할을 하는 sw
    ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 'body-parser'
    ex2) request의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 'multer'
    ex3) static 파일 설정을 도와주는 app.use(express.static())
 */
/* 
    미들웨어 1. views 설정
    - view란?
        사람들 눈에 보이는 화면, 프론트단 HTML
    - view 설정
        1. HTML 파일들을 어디서 모아둘 건지(views 폴더 설정)
        2. HTML을 보여주기 위해서 어떻게 할 건지(view engine) 
    - view engine (ejs)
        서버에서 보낸 JS 변수를 클라이언트에서 사용할 수 있도록 도와줌
        pug, ejs, nunjucks, ..., 등이 있지만 HTML과 가장 유사한 것은 ejs
 */
app.set('view engine', 'ejs');
app.set('views', './views');

/* 
    미들웨어 2. static 폴더 설정
    - static 폴더란?
        외부(browser)에서 접근 가능한 폴더
        프론트 JS, CSS, 이미지, 동영상 등 프론트에서 사용하는 모든 소스를 모아둠

 */
app.use('/static', express.static(__dirname + '/public')); // 가상경로
app.use('/uploads', express.static(__dirname + '/uploads'));
//app.use(express.static('/uploads'));

/* 
    미들웨어 3. body-parser 설정 (express 내장 모듈)
    - req.body (기본적으로 undefined)
    body-parser가 req.body를 서버 측에서 사용할 수 있도록 파싱해줌

 */
// true: queryString 모듈 사용, false: qs 모듈 사용
app.use(express.urlencoded({ extended: true }));
// request body에서 json 정보만 추출하도록 도와줌
app.use(express.json());

/* 
    미들웨어 4. multer (설치 필요)
    - req.body input type='file'의 정보는 string
        실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용
 */
const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, 'uploads/');
  },
  filename(req, file, done) {
    /* 
        extname(파일명): 확장자 추출
        basename(파일명, 확장자): 확장자를 제외한 파일명 추출
        basename(경로명): (확장자 포함된) 경로 추출
     */
    const ext = path.extname(file.originalname);
    done(null, path.basename(file.originalname, ext) + '_' + Date.now() + ext);
  },
});
const limits = { fieldSize: 5 * 1024 * 1024 };
const upload = multer({ storage, limits });

// ### 라우팅
/* 
    특정 url로 특정 method에 대한 요청을 처리함
    - url: 사용자가 정한 url
    - method: get, post, put, patch, delete (CRUD를 위한 것)
        1. get: 'R'ead
            브라우저의 url에 주소를 입력하는 것은 모두 get 요청
            localhost:8080/sesac의 화면을 보기 위해서는 /sesac의 get 요청에 대한 응답이 있어야 함
            res.send(), res.end(), res.write(), res.render(), ...
        2. post: 'C'reate
            새로운 정보를 '입력', '추가'할 때 사용
        3. put & patch: 'U'pdate
            수정 관련 메소드
            put - 전체 수정, patch - 부분 수정
        4. delete
            삭제 메소드
 */
app.get('/', (req, res) => {
  res.render('index', {
    userID: userID,
    contentData: tempDB,
  });
});

/* 
    params vs query
    - params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 요청시 /123
        - req.params에서 정보 확인 가능 {params:'123'}
        - 네이버 블로그처럼 여러 계정의 글을 조회할 때
    - query
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url 표기 /sesac?id=abc&content=123
        - req.query에서 정보 확인 가능 {id:'abc', content: '123'}
        - 검색, 필터링 기능
 */
app.get('/content/:contentID', (req, res) => {
  console.log(req.params); // {conentID: '1'}
  const { contentID } = req.params;
  const isContent = tempDB.filter((obj) => obj.contentID === Number(contentID))[0];
  console.log(isContent);
  if (isContent) {
    res.render('content', isContent);
  } else {
    res.render('404');
  }
});

app.post('/blog/posts', upload.single('img'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    contentID: tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null,
  });
  console.log(tempDB);
  res.redirect('/');
});

// /content/write는 write를 params로 파악
app.get('/write', (req, res) => {
  res.render('writeContent');
});

app.delete('/blog/delete', (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => Number(contentID) !== obj.contentID);
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.render('404');
});

// ### 포트 열기
app.listen(PORT, (req, res) => {
  console.log('http://localhost:' + PORT);
});
