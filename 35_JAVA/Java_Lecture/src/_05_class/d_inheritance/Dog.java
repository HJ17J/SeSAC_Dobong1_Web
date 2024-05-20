package _05_class.d_inheritance;

public class Dog extends Animal {

  // 오버라이딩 시에는 함수의 이름, 반환 타입, 인자의 개수와 타입이 동일해야 함
  // 어노테이션은 생략 가능
  @Override
  void makeSound(String t) {
    System.out.print(super.name); // 부모 메서드의 필드에 접근
    super.makeSound("멍멍");
    System.out.println(t);
  }

  void fetch() {
    System.out.println("공 가져와!");
  }

  /*
   * Overriding
   * - 자식 클래스에서 메서드를 재정의 하는 것
   * - 부모 메서드 재정의 시 내용의 일부만 변경하더라도 처음부터 다 적어야 함
   * - 이때 super를 이용해 부모 클래스의 내용을 가져올 수 있음
   */
}
