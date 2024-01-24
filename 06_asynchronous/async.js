/* 
    async, await: Promise 사용 시 가독성 높임
 */

let product, price;

function goMart() {
  console.log('마트 입장');
  console.log('어떤 음료를 살지 고민하는 중...');
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('고민 끝!');
      product = '콜라';
      price = 2000;
      resolve('구매완료');
      //  reject('실패');
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function execute() {
  goMart();
  await pickDrink();
  pay();
}

execute();
