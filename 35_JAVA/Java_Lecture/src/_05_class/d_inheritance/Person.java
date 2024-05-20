package _05_class.d_inheritance;

// 01. 부모 클래스 정의
// 상속
// - java에서는 다중 상속을 지원하지 않음 (여러 개의 부모를 가질 수 없음)
public class Person {

  // Case 1. 필드가 public인 경우
  //  public String name;
  //  public int age;

  // 1-1. 부모 클래스가 기본 생성자를 가지는 경우 (생성자에 매개변수 없음)
  //  public Person() {
  //    System.out.println("부모 클래스 Person의 기본 생성자가 실행되었습니다.");
  //  }

  // 1-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
  //  public Person(String name, int age) {
  //    this.name = name;
  //    this.age = age;
  //    System.out.println("부모 클래스 Person의 Person(String name, int age) 생성자가 실행되었습니다.");
  //  }

  
  // Case 2. 필드가 private인 경우
  private String name;
  private int age;

  // 2-1. 부모 클래스가 기본 생성자를 가지는 경우
  //  public Person() {
  //  }

  // 2-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
  public Person(String name, int age) {
    setName(name);
    setAge(age);
  }

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

  public void say() {
    System.out.println("안녕하세요.");
  }

  public void eat(String food) {
    System.out.println(food + "를 먹고 있어요.");
  }
}
