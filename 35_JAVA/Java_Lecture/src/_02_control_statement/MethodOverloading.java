package _02_control_statement;

public class MethodOverloading {

  /*
   * 메서드 오버로딩
   * - 하나의 클래스에서 동일한 이름의 메서드를 어려 개 정의할 수 있음
   * - 함수의 이름은 같지만 매개변수의 타입, 개수, 순서, 리턴타입 등을 다르게 해서 선언할 수 있음
   * - 함수의 동작이 유사할 때 사용
   */
  public static void main(String[] args) {
    MethodOverloading ol = new MethodOverloading();
    // static이 아닌 메서드를 사용하기 위해서는 인스턴스 생성이 필요함

    System.out.println("정수 두 개 덧셈: " + ol.add(1, 2));
    System.out.println("실수 두 개 덧셈: " + ol.add(1.1, 2.3));
    System.out.println("정수 세 개 덧셈: " + ol.add(1, 2, 3));
    System.out.println("실수 세 개 덧셈: " + ol.add(1.1, 2.1, 3.3));
  }

  public int add(int a, int b) {
    return a + b;
  }

  public double add(double a, double b) {
    return a + b;
  }

  public int add(int a, int b, int c) {
    return a + b + c;
  }

  public double add(double a, double b, double c) {
    return a + b + c;
  }

}
