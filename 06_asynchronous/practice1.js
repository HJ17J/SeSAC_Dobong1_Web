/* 
    Promise 사용
    call > back > hell
 */

// then ~ catch
function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(name);
    }, 1000);
  });
}

function back(txt) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(txt);
    }, 1000);
  });
}

function hell(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(msg);
    }, 1000);
  });
}

call('hyeon')
  .then((name) => {
    console.log(name + ' 반가워');
    return back('back');
  })
  .then((txt) => {
    console.log(txt + '을 실행했구나');
    return hell('callback hell');
  })
  .then((msg) => {
    console.log('여기는 ' + msg);
  });
