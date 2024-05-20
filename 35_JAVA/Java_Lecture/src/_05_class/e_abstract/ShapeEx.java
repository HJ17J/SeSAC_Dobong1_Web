package _05_class.e_abstract;

public class ShapeEx {

  public static void main(String[] args) {

    Circle c1 = new Circle("blue");
    c1.start(); // 추상 클래스에 선언되어 있는 일반 메소드
    c1.draw();
    System.out.println("원의 색상은 " + c1.getColor());

    System.out.println("---------");
    Square s1 = new Square("pink", "정사각형");
    s1.start();
    s1.draw();
    s1.showType();
  }
}
