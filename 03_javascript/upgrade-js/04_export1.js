/*  모듈 만들기 - export 사용
    한번에 내보내기
 */

const flowers = ['rose', 'sunflower', 'tulip'];
function getFlowers(idx) {
  if (idx >= flowers.length || idx < 0) return 'x';
  return flowers[idx];
}

// export { flowers, getFlowers };

// export 시 별칭 사용 가능
export { flowers as flr, getFlowers as getFlr };
