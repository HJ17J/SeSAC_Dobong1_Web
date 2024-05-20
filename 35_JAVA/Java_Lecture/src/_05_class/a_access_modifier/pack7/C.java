package _05_class.a_access_modifier.pack7;

import _05_class.a_access_modifier.pack6.A;

// 외부 패키지
public class C {

  void methodC() {
    A a;
//    a = new A(); // 클래스 자체에는 접근 가능하나, 생성자에 접근 불가 (protected)
//    a.field = 12;
//    a.methodA();
  }

}
