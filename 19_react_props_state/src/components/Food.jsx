export function Food(food) {
  return (
    <div>
      <p>내가 좋아하는 음식은 {food.name}입니다.</p>
      <p>좋아하는 이유는 {food.reason}</p>
    </div>
  );
}

Food.defaultProps = {
  name: '샤브샤브',
  reason: '오늘따라 따뜻한 게 생각나서',
};
