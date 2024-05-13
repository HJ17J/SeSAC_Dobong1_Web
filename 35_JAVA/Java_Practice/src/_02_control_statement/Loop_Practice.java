package _02_control_statement;

import java.util.Scanner;

public class Loop_Practice {

  public static void main(String[] args) {
    System.out.println("숫자를 입력하세요");
    Scanner sc = new Scanner(System.in);
    int number = sc.nextInt();
    for(int i=1; i<=number; i++){
      System.out.print(i + " ");
    }
  }
}
