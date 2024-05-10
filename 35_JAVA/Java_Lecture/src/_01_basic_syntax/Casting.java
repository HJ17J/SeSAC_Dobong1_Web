package _01_basic_syntax;

public class Casting {

  public static void main(String[] args) {
    // 1. 묵시적 형변환
    /*
     * 작은 범위 > 큰 범위일 경우 (int > long)
     */
    int smallNumber = 10;
    System.out.println("smallNumber(int): " + smallNumber);
    double bignNumber = smallNumber;
    System.out.println("bigNumber(double): " + bignNumber);

    // 2. 명시적 형변환
    /* 큰 범위 > 작은 범위 *강제 변환
     */
    double anotherBigNumber = 20.0;
    int anotherSmallNumber = (int) anotherBigNumber;
    System.out.println("--- 데이터 손실이 일어나지 않는 경우 ---");
    System.out.println("anotherBigNumber(double): " + anotherBigNumber);
    System.out.println("anotherSmallNumber(int): " + anotherSmallNumber);

    int largeNumber = 1000;
    byte smallByte = (byte) largeNumber;
    System.out.println("--- 데이터 손실이 일어나는 경우 ---");
    System.out.println("largeNumber(int): " + largeNumber);
    System.out.println("smallByte(byte): " + smallByte);

  }
}
