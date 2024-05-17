package _04_exception;
/*
 * Error
 * - 시스템에 비정상적인 상황이 발생한 경우
 * - 코드에 의해 수섬할 수 없는 심각한 오류
 * - OutOfMemoryError, ThreadDeath, ...,
 */

/*
 * 일반 예외 / 실행 예외
 * 일반 예외 (Exception, Checked Exception)
 * - 확인 시점: 컴파일 시점, 명시적으로 예외처리 반드시 필요
 * - IOException, FileNotFoundException
 * 실행 예외 (Runtime Exception, Unchecked Exception)
 * - 확인 시점: 런타임 시점, 예외처리 강제되지 않으나 프로그램의 정상적인 작동을 위해 예외처리 작성하는 것이 좋음
 * - NullPointerException, InputMismatchException
 */

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionEx {

  public static String divide(int x, int y) {
    return x + "/" + y + "=" + (x / y);
  }

  public static int getLength(String str) {
    return str.length();
  }

  public static int getValuesByIdx(int[] arr, int idx) {
    return arr[idx];
  }

  public static void main(String[] args) {
    System.out.println(divide(6, 2));
//    System.out.println(divide(6, 0));
//    System.out.println("여기까지 나올까요?");
    try {
      System.out.println("나누기 연산 시작");
      System.out.println(divide(6, 0));
    } catch (ArithmeticException error) {
      // catch의 파라미터 작성 시 어떤 에러인지 명시해야 함
      // 방법 1: e.getMessage(): 예외가 발생한 이유만 보여줌
      System.out.println("나누기 중 예외 발생 " + error.getMessage()); // by zero

      // 방법 2: e. toString(): 예외 종류를 리턴
      System.out.println(
          "나누기 중 예외 발생 " + error.toString()); // java.lang.ArithmeticException: / by zero
    } finally {
      System.out.println("나누기 연산 종료");
    }

    // case 2. null에 접근
    try {
      System.out.println(getLength("hello"));
      System.out.println(getLength(null));
    } catch (NullPointerException error) {
      System.out.println("단어 길이 연산 중 예외 발생: " + error.getMessage());
      System.out.println("단어 길이 연산 중 예외 발생: " + error.toString());
    }

    // case 3. index 값으로 배열 접근시 범위에 없는 값으로 접근 (ArrayIndexOutOfBoundsException)
    int[] numbers = {10, 20, 30, 40, 50};
    try {
      System.out.println(getValuesByIdx(numbers, 2));
      System.out.println(getValuesByIdx(numbers, numbers.length));
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("배열 인덱싱 중 예외 발생: " + e.getMessage());
      System.out.println("배열 인덱싱 중 예외 발생: " + e.toString());
    }

    // case 4. 입력 형식 예외
    Scanner sc = new Scanner(System.in);
    try {
      System.out.println("정수를 하나 입력해주세요.");
      int number = sc.nextInt();
      System.out.println("입력한 정수: " + number);
    } catch (InputMismatchException e) {
      System.out.println("입력 형식 예외 발생: " + e.getMessage());
      System.out.println("입력 형식 예외 발생: " + e.toString());
    }
  }
}

/*
 * try-catch-finally
 * 1. catch 여러 개를 이어서 작성 가능함
 *   - try{} catch(예외1 e){} catch(예외2 e){} finally{}
 * 2. catch문 하나에 여러 개의 에러를 받는 것도 가능함
 *   - catch(예외1 | 예외2 error){}
 *   - 예외처리 구문이 비슷할 경우
 *   - 두 예외가 상속 관계에 있지 않을 경우
 */