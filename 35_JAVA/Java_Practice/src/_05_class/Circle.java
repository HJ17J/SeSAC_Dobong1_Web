package _05_class;

public class Circle {

  private final double RADIUS;
  private static final double PI = 3.14159265359;

  public Circle(double radius) {
    this.RADIUS = radius;
  }

  public double calculateArea() {
    return RADIUS * RADIUS * PI;
  }
}
