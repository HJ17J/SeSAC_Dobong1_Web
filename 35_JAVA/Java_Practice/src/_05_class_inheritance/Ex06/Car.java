package _05_class_inheritance.Ex06;

public class Car extends Vehicle {

  public Car() {

  }

  @Override
  public void move() {
    System.out.println("도로를 따라 이동 중");
  }
}
