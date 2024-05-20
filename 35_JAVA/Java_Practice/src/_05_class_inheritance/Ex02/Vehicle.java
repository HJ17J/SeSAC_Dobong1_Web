package _05_class_inheritance.Ex02;

public class Vehicle {

  private String brand;
  private String model;
  private int year;

  public Vehicle(String brand, String model, int year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public int getYear() {
    return year;
  }

  public void setYear(int year) {
    this.year = year;
  }

  public void turnOn() {
    System.out.println("차량 시동을 걸었습니다.");
  }

  public void turnOff() {
    System.out.println("차량을 정지했습니다.");
  }
}
