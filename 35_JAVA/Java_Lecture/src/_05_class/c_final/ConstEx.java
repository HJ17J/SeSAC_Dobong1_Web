package _05_class.c_final;

public class ConstEx {

  public static void main(String[] args) {
    System.out.println(Const.MAX_VALUE);
    System.out.println(Const.GREETING);
//    Const.MAX_VALUE = 200; // final이므로 재할당 불가
    System.out.println(Const.MIN_VALUE);
    Const.MIN_VALUE = 10;
    System.out.println(Const.MIN_VALUE);

    // final 변수 접근
    // 해당 변수는 static이 아니므로 인스턴스로 접근 필요
//    System.out.println(Const.name);
    Const c1 = new Const();
    System.out.println(c1.name);

  }
}
