package _05_class_inheritance.Ex06;

import java.util.ArrayList;
import java.util.List;

public class VehicleEx {

  public static void main(String[] args) {
    List<Vehicle> vehicles = new ArrayList<>();
    Car car = new Car();
    vehicles.add(car);
    Airplane airplane = new Airplane();
    vehicles.add(airplane);

    for (Vehicle vehicle : vehicles) {
      vehicle.move();
      if (vehicle instanceof Airplane) {
        ((Airplane) vehicle).fly();
      }
    }
  }
}
