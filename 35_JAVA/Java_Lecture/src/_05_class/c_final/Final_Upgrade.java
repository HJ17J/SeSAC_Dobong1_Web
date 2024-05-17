package _05_class.c_final;

public class Final_Upgrade {

  public static void main(String[] args) {
    FinalMethod obj = new FinalMethod();
    obj.showMessage();
    SubClass obj2 = new SubClass();
    obj2.showMessage();
  }
}

class FinalMethod {

  final void showMessage() {
    System.out.println("final이 붙은 이 메소드는 오버라이딩 할 수 없습니다.");
  }
}

class SubClass extends FinalMethod {

  // 오버라이딩
  // final void showMessage() {} // 'showMessage()' cannot override 'showMessage()' in '_05_class.c_final.FinalMethod'; overridden method is final
}

// 클래스에 final 키워드 사용할 수 있음
// 다만 상속은 불가능
final class FinalClass {

}

// class SubClass2 extends FinalClass {} // Cannot inherit from final '_05_class.c_final.FinalClass'