const Comment = require('../model/Comment');
/* 
    controller에서는 model에서 받은 데이터를 가공하여 view로 전달
*/

exports.main = (req, res) => {
  res.render('index');
};

exports.comments = (req, res) => {
  console.log(Comment.commentsInfo());
  const comments = Comment.commentsInfo();
  res.render('comments', { commentInfo: comments });
};

exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; //1,2,3,4
  const comments = Comment.commentsInfo(); //[{},{},{},{}]
  //   if (commentId < 1 || commentId > comments.length) {
  //     return res.render("404"); // return 없으면 아래 코드 계속 실행 => 응답 두번 이상 실행 -> ERROR
  //   }
  //   if (isNaN(commentId)) {
  //     return res.render("404");
  //   }
  //   한번에 처리
  if (!comments[commentId - 1]) return res.render('404');

  res.render('comment', { commentInfo: comments[commentId - 1] });
};
