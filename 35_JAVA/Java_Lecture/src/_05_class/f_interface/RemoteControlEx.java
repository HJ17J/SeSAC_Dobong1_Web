package _05_class.f_interface;

public class RemoteControlEx {

  public static void main(String[] args) {
    RemoteControl rc;
    rc = null;

    rc = new Television();
    rc.turnOn();
    rc.setVolume(5);
    rc.turnOff();
    System.out.println("==============");
  }
}
