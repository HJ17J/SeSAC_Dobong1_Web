package _05_class_inheritance.Ex02;

public class Bus extends Vehicle {

  private int passengerCapacity;

  public Bus(String brand, String model, int year, int passengerCapacity) {
    super(brand, model, year);
    setPassengerCapacity(passengerCapacity);

  }

  public int getPassengerCapacity() {
    return passengerCapacity;
  }

  public void setPassengerCapacity(int passengerCapacity) {
    this.passengerCapacity = passengerCapacity;
  }

  public void drive() {
    System.out.println("승객을 운송합니다.");
  }

  @Override
  public String toString() {
    return "Bus { brand='" + getBrand() + "', model='" + getModel()
        + "', year='" + getYear() + "', passengerCapacity='" + getPassengerCapacity() + "' }";
  }
}
