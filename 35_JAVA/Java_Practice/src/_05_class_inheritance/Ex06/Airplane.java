package _05_class_inheritance.Ex06;

public class Airplane extends Vehicle implements Flyable {

  @Override
  public void move() {
    System.out.println("하늘을 날아가는 중");
  }

  @Override
  public void fly() {
    System.out.println("고도 10000 피트에서 비행 중");
  }
}
