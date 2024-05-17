package _05_class;

import java.util.ArrayList;
import java.util.List;

public class StudentEx {

  public static void main(String[] args) {
    List<Student> students = new ArrayList<>();
    Student std1 = new Student("김새싹", 20231001, 1);
    Student std2 = new Student("박지은", 20231002, 2);
    Student std3 = new Student("이은지", 20231003, 3);

    students.add(std1);
    students.add(std2);
    students.add(std3);

    for (Student std : students) {
      std.displayInfo();
      System.out.println();
    }
    System.out.println("총 학생 수는 " + Student.getTotalStudents() + "명입니다.");
  }
}
