package _05_class.d_inheritance;

public class StudentEx {

  public static void main(String[] args) {
//    Student std1 = new Student("앨리", 20, "도봉");
//    System.out.println(std1.name);
//    System.out.println(std1.age);
//    System.out.println(std1.campus);
//    std1.setCampus("Dobong"); // 자식 클래스 Student의 메서드
//    std1.say(); // 부모 클래스 Person에서 상속받은 메서드
//    std1.eat("바나나");

    Student std2 = new Student("앨리", 22);
    System.out.println(std2.getName());
    System.out.println(std2.getAge());
    System.out.println(std2.getCampus()); // null, 생성자에서 campus 초기화 안 함
    std2.setCampus("도봉");
    std2.say();
    std2.eat("사과");
  }
}
