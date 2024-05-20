package _05_class_inheritance.Ex02;

public class Motorcycle extends Vehicle {

  private String licenseType;

  public Motorcycle(String brand, String model, int year, String licenseType) {
    super(brand, model, year);
    setLicenseType(licenseType);
  }

  public String getLicenseType() {
    return licenseType;
  }

  public void setLicenseType(String licenseType) {
    this.licenseType = licenseType;
  }

  public void makeNoise() {
    System.out.println("울림통을 합니다.");
  }

  @Override
  public String toString() {
    return "Bus { brand='" + getBrand() + "', model='" + getModel()
        + "', year='" + getYear() + "', licenseType='" + getLicenseType() + "' }";
  }
}
