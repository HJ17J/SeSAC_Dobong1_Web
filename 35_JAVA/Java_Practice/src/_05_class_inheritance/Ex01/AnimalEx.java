package _05_class_inheritance.Ex01;

public class AnimalEx {

  public static void main(String[] args) {
    Cat kitty = new Cat("별", 7);
    kitty.makeSound();

    Dog puppy = new Dog("보리", 3);
    puppy.makeSound();
  }
}
