import java.util.Arrays;

public class Main {

  /**
   * 자바는 기본적으로 클래스 단위로 프로그램 작성 클래스명의 첫 글자는 대문자
   */
  /* 주석 */
  // 한 줄 주석은 // (ctrl+/)
  // 여러 줄 주석은 /* */ (ctrl+shift+/)
  // 문서 주석은 /** */
  public static void main(String[] args) {
    // public: 접근 제한자
    // static:
    System.out.println("Hello world!");
    System.out.println(args.length);
    System.out.println(Arrays.toString(args));
  }
}