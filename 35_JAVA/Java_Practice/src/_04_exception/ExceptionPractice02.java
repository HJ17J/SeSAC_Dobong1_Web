package _04_exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionPractice02 {

  public static double getAvgNumArray(int len) {
    int[] arr = new int[len];
    int sum = 0;
    if (len == 0) {
      throw new ArithmeticException();
    }
    for (int i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
    }
    for (int num : arr) {
      sum += num;
    }
    return (double) sum / len;
  }

  public static void main(String[] args) {
    try {
      System.out.println("배열의 길이를 입력해주세요.");
      Scanner sc = new Scanner(System.in);
      int len = sc.nextInt();
      System.out.println(getAvgNumArray(len));
    } catch (InputMismatchException e) {
      System.out.println("숫자 값이 아닙니다.\nError: " + e.toString());
    } catch (ArithmeticException | NegativeArraySizeException e) {
      System.out.println("배열의 길이는 1 이상의 양수여야 합니다.\nError: " + e.toString());
    } catch (Exception e) {
      System.out.println("오류가 발생했습니다.\nError: " + e.toString());
    }
  }
}
