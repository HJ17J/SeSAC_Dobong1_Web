/* 
    Promise 사용
    call > back > hell
 */

// async/await
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

async function buyDrink() {
  const name = await call('hyeon');
  console.log(name + ' 반가워');
  const txt = await back('back');
  console.log(txt + '을 실행했구나');
  const msg = await hell('callback hell');
  console.log('여기는 ' + msg);
}

buyDrink();
