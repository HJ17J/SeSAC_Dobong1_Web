/*  모듈 만들기 - export 사용 */
export const animals = ['dog', 'cat'];
export function showAnimals() {
  animals.forEach((el) => console.log(el));
}
