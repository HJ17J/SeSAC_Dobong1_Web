package _05_class_inheritance.Ex02;

public class VehicleEx {

  public static void main(String[] args) {
    Bus bus = new Bus("Hyundai", "City Bus", 2022, 30);
    Car car = new Car("Toyota", "Camry", 2023, true);
    Motorcycle motor = new Motorcycle("Harley-Davidson", "Sportster", 2021, "A");

    System.out.println("==== Bus 정보 ====");
    System.out.println(bus.toString());
    bus.turnOn();
    bus.drive();
    bus.turnOff();
    System.out.println();

    System.out.println("==== Car 정보 ====");
    System.out.println(car.toString());
    car.turnOn();
    car.parking();
    car.turnOff();
    System.out.println();

    System.out.println("==== Motorcycle 정보 ====");
    System.out.println(motor.toString());
    motor.turnOn();
    motor.makeNoise();
    motor.turnOff();
  }
}
