package _05_class.e_abstract;

public abstract class Shape {

  String color;

  public Shape(String color) {
    this.color = color;
  }

  abstract void draw();

  void start() {
    System.out.println("도형을 그려보자! 🖌️🖍️");
  }

  String getColor() {
    return this.color;
  }

  /*
   * 추상 메소드
   * - 추상 메소드는 중괄호 블록 없이 선언만 함
   * - 구현부는 자식 클래스에서 오버라이딩을 통해서 진행 (필수)
   * - 자식 클래스에서 공통적으로 사용할 예정인 함수이지만 구현부가 모두 다를 때 사용
   */
}
