package _04_exception;

public class ExceptionPractice01 {

  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4};
    try {
      for (int i = 0; i <= 5; i++) {
        System.out.println(arr[i]);
      }
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("인덱스가 범위를 벗어났습니다.");
    }
  }
}
