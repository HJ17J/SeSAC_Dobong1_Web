package _05_class_inheritance.Ex04;

public abstract class Shape {

  private String color;
  private String type;

  public Shape(String color, String type) {
    this.color = color;
    this.type = type;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public abstract double calculateArea();

  public void shapeInfo() {
    System.out.println("==== " + getType() + " 도형의 정보 ====");
    System.out.println("도형의 색상: " + getColor());
    System.out.println("도형의 넓이: " + calculateArea());
  }

  ;
}
