package _05_class;

public class StudentEx {

  public static void main(String[] args) {
    Student s1 = new Student("allie", 1);

    // toString() 오버라이딩 전: _05_class.Student@3b07d329
    // toString() 오버라이딩 후: Student { name="allie", grade=1 }
    System.out.println(s1);

    // 반환값 없이 출력만 하는 메서드
    s1.goToSchool();
    s1.study("Java");

    // 반환값 있는 메서드
    System.out.println(s1.getGrade() + "학년");
    System.out.println(s1.getTestResult(100));

    Student s2 = new Student("Rumon", 2);
    System.out.println(s2);
    System.out.println(s2.name);
    System.out.println(s2.grade);
  }
}
