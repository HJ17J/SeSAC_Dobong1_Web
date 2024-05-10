package _01_basic_syntax;

import java.util.Scanner;

public class IO {

  public static void main(String[] args) {
    // \n: 개행문자
    // \t: tab
    System.out.print("안녕하세요.\n");
    System.out.print("반갑습니다.\t");
    System.out.print("잘 부탁드립니다.\n");

    // 입력
    System.out.println("공백으로 구분하여 이름/나이/키/결혼여부를 입력해주세요.");
    Scanner scan = new Scanner(System.in);
    String name = scan.next();
    int age = scan.nextInt();
    double height = scan.nextDouble();
    boolean isMarried = scan.nextBoolean();
    scan.close();
    System.out.println("=== 입력 결과 출력 ===");
    System.out.println("이름: " + name);
    System.out.println("나이: " + age);
    System.out.println("키: " + height);
    System.out.println("결혼 여부: " + isMarried);
  }
}
