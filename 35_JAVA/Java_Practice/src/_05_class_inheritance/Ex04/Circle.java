package _05_class_inheritance.Ex04;

public class Circle extends Shape {

  private double radius;

  public Circle(String color, String type, double radius) {
    super(color, type);
    this.radius = radius;
  }

  @Override
  public double calculateArea() {
    return this.radius * this.radius * Math.PI;
  }
}
