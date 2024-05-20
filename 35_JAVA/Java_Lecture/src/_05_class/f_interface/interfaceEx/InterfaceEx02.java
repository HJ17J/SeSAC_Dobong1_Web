package _05_class.f_interface.interfaceEx;

abstract class MyAbstractClass {

  public abstract void abstractMethod();
}

interface MyInterface {

  void interfaceMethod(); // public abstract void interfaceMethod()
}

public class InterfaceEx02 extends MyAbstractClass implements MyInterface {

  @Override
  public void abstractMethod() {
  }

  @Override
  public void interfaceMethod() {
  }
}
