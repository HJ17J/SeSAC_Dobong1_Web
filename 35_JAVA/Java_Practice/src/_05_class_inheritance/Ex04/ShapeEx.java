package _05_class_inheritance.Ex04;

import java.util.ArrayList;
import java.util.List;

public class ShapeEx {

  public static void main(String[] args) {

    List<Shape> shapes = new ArrayList<>();
    Circle circle = new Circle("blue", "Circle", 5);
    Rectangle rectangle = new Rectangle("orange", "Rectangle", 4, 6);

    shapes.add(circle);
    shapes.add(rectangle);

    for (Shape shape : shapes) {
      shape.shapeInfo();
      System.out.println();
    }
  }
}
