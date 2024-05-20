package _05_class.a_access_modifier.pack6;

// 같은 패키지
public class B {

  public void methodB() {
    // 같은 패키지에서는 생성자, 필드, 메소드 모두 접근 가능 (protected)
    A a = new A();
    a.field1 = 11;
    a.methodA();
  }
}
