package _05_class.f_interface.interfaceEx;

interface Move {

  void moveForward();

  void moveBackward();
}

interface Power {

  void powerOn();

  void powerOff();
}

/* interface에서 interface 상속 시에는 "extends" 사용
 * - 다중 상속 가능
 * - implements: 클래스가 인터페이스 구현할 때
 */
interface Car extends Move, Power {

  void changeGear(int gear);

}

class Suv implements Car {

  @Override
  public void changeGear(int gear) {
    System.out.println("기어 변경: " + gear);
  }

  @Override
  public void powerOn() {
    System.out.println("시동 켜기");
  }

  @Override
  public void powerOff() {
    System.out.println("시동 끄기");
  }

  @Override
  public void moveForward() {
    System.out.println("전진");
  }

  @Override
  public void moveBackward() {
    System.out.println("후진");
  }
}

public class InterfaceEx01 {

  public static void main(String[] args) {
    Suv s1 = new Suv();
    s1.powerOn();
    s1.moveBackward();
    s1.powerOff();
    s1.changeGear(2);
  }
}