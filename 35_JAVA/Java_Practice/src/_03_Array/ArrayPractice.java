package _03_Array;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayPractice {
  public static void main(String[] args) {
    System.out.println("5개의 정수를 입력하세요.");
    Scanner sc = new Scanner(System.in);
    int[] numbers = new int[5];
    for(int i = 0; i < numbers.length; i++){
      numbers[i] = sc.nextInt();
    }
    int sum = 0;
    for(int i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }

    System.out.println("평균은 "+(double)sum/5);
  }
}
