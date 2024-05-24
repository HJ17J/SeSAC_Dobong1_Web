package springlecture.springbootthymeleaf.dto;

public class UserDTO {

  private String name;
  private int age;  // null값이 들어올 경우 Integer 사용

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}
