package _05_class.e_abstract;

public class Square extends Shape {

  private String type;

  public Square(String color, String type) {
    super(color);
    setType(type);
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  void showType() {
    System.out.println("사각형의 타입은 " + type + "입니다");
  }

  @Override
  void draw() {
    System.out.println("사각형 그리기");
  }
}
