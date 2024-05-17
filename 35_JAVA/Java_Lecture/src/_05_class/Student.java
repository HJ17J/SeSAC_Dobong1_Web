package _05_class;

// 패키지
// - 여러 클래스를 가지고 있는 디렉토리
// - 클래스를 유일하게 만들어주는 식별자

public class Student {

  // 1. Field
  public String name;
  public int grade;

  // 2. Method
  // 2-1. Constructor
  public Student(String name, int grade) {
    // 생성자의 인자를 이용해 클래스의 필드를 초기화할 수 있음
    // this 키워드를 사용하지 않아도 초기화가 가능하지만 의미를 명확하게 하기 위해 this를 작성하는 게 일반적
    this.name = name;
    this.grade = grade;
  }

  // 2-2. 클래스의 (생성자가 아닌) Method
  public void goToSchool() {
    System.out.println("학교에 갑니다 ጿ ኈ ቼ ዽ....🏫");
  }

  public void study(String subject) {
    System.out.println(subject + " 공부 중...📖");
  }

  public int getGrade() {
    return this.grade;
  }

  public String getTestResult(int score) {
    return this.name + " 학생의 점수는 " + score + "점";
  }

  // 인스턴스를 출력하면 toString()이 자동으로 실행됨
  // toString() 오버라이딩
  // @Override
  public String toString() {
    return "Student { name=\"" + name + "\", grade=" + grade + " }";
  }
}
