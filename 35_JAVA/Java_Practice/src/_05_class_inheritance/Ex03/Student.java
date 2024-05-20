package _05_class_inheritance.Ex03;

public abstract class Student {

  private String name;
  private String school;
  private int age;
  private int student_number;

  public Student(String name, String school, int age, int student_number) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.student_number = student_number;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSchool() {
    return school;
  }

  public void setSchool(String school) {
    this.school = school;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getStudent_number() {
    return student_number;
  }

  public void setStudent_number(int student_number) {
    this.student_number = student_number;
  }

  public abstract void todo();
}
