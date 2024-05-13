package _02_control_statement;

import java.util.Scanner;

public class Method_Practice_1 {

  public static void main(String[] args) {
    System.out.println("숫자 두 개를 입력하세요");
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();

    System.out.println("덧셈 결과: " + add(a, b));
    System.out.println("뺄셈 결과: " + subtract(a, b));
    System.out.println("나눗셈 결과: " + divide(a, b));
    System.out.println("곱셈 결과: " + multiply(a, b));
  }

  public static int add(int a, int b){
    return a + b;
  }

  public static int subtract(int a, int b){
    return a-b;
  }

  public static float multiply(int a, int b){
    return a*b;
  }

  public static double divide(int a, int b){
    return (double)a/b;
  }
}
