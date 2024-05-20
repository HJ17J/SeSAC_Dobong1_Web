package _05_class_inheritance.Ex03;

public class Kim extends Student {

  public Kim(String name, String school, int age, int std_id) {
    super(name, school, age, std_id);
  }


  @Override
  public void todo() {
    System.out.println("점심은 김가네 김밥");
  }
}
