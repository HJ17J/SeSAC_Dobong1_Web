package _02_control_statement;

import java.util.Arrays;

public class Method {

  public static void main(String[] args) {
    hello();
    System.out.println(sum(5, 10));
    System.out.println(connect("안녕", "하세요"));

    int number = 5;
    int[] numbers = {10, 20};
    int[] numbers2 = {10, 20, 30};

    // call by value
    System.out.println("기존 number 확인: " + number);
    System.out.println("함수의 리턴값 확인: " + multi_10(number));
    System.out.println("multi_10을 거치고 난 뒤 number: " + number);

    // call by address
    System.out.println(numbers);
    System.out.println(multi_10_2(numbers));

    System.out.println("기존 numbers2 확인: " + Arrays.toString(numbers2));
    System.out.println("함수의 리턴값 확인: " + Arrays.toString(multi_10_2(numbers2)));
    System.out.println("함수를 거치고 난 후 numbers2: " + Arrays.toString(numbers2));
  }

  // 반환값이 없는 메서드
  public static void hello() {
    System.out.println("hello");
  }

  // 반환값이 있는 메서드
  public static int sum(int x, int y) {
    return x + y;
  }

  public static String connect(String a, String b) {
    return a + b;
  }

  // call by value vs call by address
  /*
   * call by value
   * - primitive 타입을 함수의 인자로 전달
   * - 실제 값을 함수로 전달하는 것, 원래 값은 변경되지 않음
   *
   * call by address
   * - reference 타입을 함수의 인자로 전달
   * - 변수가 저장되어 있는 주소를 전달
   * - 함수 내부에서 전달된 변수를 변경한다면 실제 변수도 변경됨
   */

  // call by value
  public static int multi_10(int x) {
    x = x * 10;
    return x;
  }

  // call by address
  public static int[] multi_10_2(int[] numbers) {
    for (int i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i] * 10;
    }
    return numbers;
  }
}
