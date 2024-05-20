package _05_class_inheritance.Ex01;

public class Cat extends Animal {

  public Cat(String name, int age) {
    super("고양이", name, age);
  }

  @Override
  public void makeSound() {
    System.out.println("야옹");
  }

}
