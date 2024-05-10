package _02_control_statement;

import java.util.Scanner;

public class Conditional {

  public static void main(String[] args) {
    int number = 10;
    if (number % 2 == 0) {
      System.out.println("짝수입니당");
    } else {
      System.out.println("홀수입니당");
    }

    // if - else if
    if (number % 5 == 0) {
      System.out.println("5의 배수입니당");
    } else if (number % 3 == 0) {
      System.out.println("3의 배수입니당");
    } else {
      System.out.println("3의 배수, 5의 배수가 아닙니다.");
    }

    // switch
    String dayOfWeek;
    int day = 1;
    switch (day) {
      case 1:
        dayOfWeek = "일요일";
        break;
      case 2:
        dayOfWeek = "월요일";
        break;
      case 3:
        dayOfWeek = "화요일";
        break;
      case 4:
        dayOfWeek = "수요일";
        break;
      case 5:
        dayOfWeek = "목요일";
        break;
      case 6:
        dayOfWeek = "금요일";
        break;
      case 7:
        dayOfWeek = "토요일";
        break;
      default:
        dayOfWeek = "잘못된 입력입니다.";
        break;
    }
    System.out.println("오늘은 " + dayOfWeek + "입니다");

    // 문자열 비교
    /*
     * 비교 연산자(==): 두 객체의 값을 비교하는 것이 아니라 주소를 비교
     * equals() 메서드: 두 객체의 값이 동일한지 비교
     */
    Scanner scan = new Scanner(System.in);
    System.out.println("이름을 입력해주세요.");
    String name = scan.next();
    scan.close();
    System.out.println("이름: " + name);
    System.out.println("name == \"allie\": " + (name == "allie"));
    System.out.println("name.equals(\"allie\"): " + (name.equals("allie")));
    System.out.println();

    /*
     * String Literal과 new String()
     * 자바에서 String literal로 문자열을 생성하면 Heap 영역의 String Pool에 문자열을 저장함
     *  String pool에 저장된 문자열은 재사용이 가능함
     * 즉 각기 다른 두 변수에 동일한 문자열을 리터럴로 선언한 경우, 두 변수는 동일한 주소를 참조함
     * 반대로 new 연산자를 이용해 String 객체를 생성할 경우 매번 새로운 객체가 생성되므로 각 객체가 Heap 영역을 차지하게 됨
     */
    String str1 = "Hello, world"; // 문자열 리터럴
    String str2 = "Hello, world";
    System.out.println("str1 == str2: " + (str1 == str2));
    System.out.println("str1.equals(str2): " + (str1.equals(str2)));
    System.out.println();

    String str3 = new String("Hello, world");
    String str4 = new String("Hello, world");
    System.out.println("str3 == str4: " + (str3 == str4));
    System.out.println("str3.equals(str4): " + (str3.equals(str4)));

  }
}
