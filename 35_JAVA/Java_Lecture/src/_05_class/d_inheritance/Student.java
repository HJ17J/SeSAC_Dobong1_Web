package _05_class.d_inheritance;

public class Student extends Person {

  // Case 1. 필드가 public인 경우
  //  public String campus; // Student만의 필드

  //  public Student(String name, int age, String campus) {
  // 1-1. 부모 클래스가 기본 생성자를 가지는 경우 (생성자에 매개변수 없음)
  //    super(); // Person 생성자 실행 (부모 클래스의 생성자가 기본 생성자(매개변수 없음)일 경우 super() 생략 가능)
  //    this.campus = campus;
  //    this.age = age;
  //    this.name = name;
  //    System.out.println("Student 클래스의 생성자가 실행되었습니다.");

  // 1-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
  //    super(name, age); // 매개변수를 전달해야 하므로 생략 불가능
  //    this.campus = campus;
  //    System.out.println("Student 클래스의 생성자가 실행되었습니다.");
  //  }

  
  // Case 2. 필드가 private인 경우
  private String campus;

  public Student(String name, int age) {
    // 2-1. 부모 클래스가 기본 생성자를 가지는 경우
    //    super(); // 생략 가능
    //    this.name = name; // 부모 필드가 private인 경우 자식 클래스에서도 접근 불가
    //    this.age = age;
    //    setName(name);
    //    setAge(age);

    // 2-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
    super(name, age);
  }

  public String getCampus() {
    return campus;
  }

  public void setCampus(String campus) {
    this.campus = campus;
    System.out.println(campus + " 캠퍼스에서 공부 중입니다.");
  }
}
