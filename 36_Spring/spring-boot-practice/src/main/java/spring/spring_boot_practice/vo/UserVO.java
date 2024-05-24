package spring.spring_boot_practice.vo;

import java.util.Date;

public class UserVO {

  private String name;
  private int age;
  private String gender;
  private Date birthday;
  private String[] interests;

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public String getGender() {
    return gender;
  }

  public Date getBirthday() {
    return birthday;
  }

  public String[] getInterests() {
    return interests;
  }
}
