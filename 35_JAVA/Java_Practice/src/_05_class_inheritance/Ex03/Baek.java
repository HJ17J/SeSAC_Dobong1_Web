package _05_class_inheritance.Ex03;

public class Baek extends Student {

  public Baek(String name, String school, int age, int std_id) {
    super(name, school, age, std_id);
  }

  @Override
  public void todo() {
    System.out.println("점심은 백종원 피자");
  }
}
