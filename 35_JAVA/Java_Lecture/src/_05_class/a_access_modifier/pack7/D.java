package _05_class.a_access_modifier.pack7;

import _05_class.a_access_modifier.pack6.A;

// 외부 패키지 + 상속
public class D extends A {

  public D() {
    super();
    this.field1 = 1;
    this.methodA();
  }
}
