package _05_class.a_access_modifier.pack4;

import _05_class.a_access_modifier.pack3.A;

public class C {

  public static void main(String[] args) {
    A a = new A(); // 다른 패키지의 A 클래스를 이용해 인스턴스 생성
    System.out.println(a.field1);
//    System.out.println(a.field2); // default이기 때문에 접근 불가
    a.method1();
//    a.method2(); // default이므로 접근 불가
//    a.method3(); // private이므로 접근 불가
  }
}
