package _04_exception;

import java.util.ArrayList;
import java.util.Scanner;

public class ExceptionPractice03 {

  public static void main(String[] args) {
    System.out.print("배열의 크기를 입력하세요: ");
    Scanner sc = new Scanner(System.in);
    int len = sc.nextInt();
    int[] arr = new int[len];
    System.out.printf("%d개의 정수를 입력하세요:\n", len);
    for (int i = 0; i < len; i++) {
      System.out.printf("정수 %d: ", i + 1);
      int num = sc.nextInt();
      arr[i] = num;
    }
    ArrayList<Integer> dpList = new ArrayList<Integer>();
    for (int i = 0; i < len; i++) {
      for (int j = 0; j < len; j++) {
        if (i == j || dpList.contains(arr[i])) {
          continue;
        }
        if (arr[i] == arr[j]) {
          dpList.add(arr[i]);
        }
      }
    }
    System.out.println("중복된 요소: " + dpList.toString());
  }
}
