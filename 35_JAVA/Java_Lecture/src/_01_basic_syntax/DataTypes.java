package _01_basic_syntax;

public class DataTypes {

  public static void main(String[] args) {
    System.out.println("primitive type");
    int a = 11;
    long b = 100000000L; //
    short c = 30000;
    byte d = 127;

    char ch = 'A';
    System.out.println();

    String greeting = "Hello world";
    int[] numbers = {1, 2, 3, 4, 5};

    Person person = new Person("allie", 22);

    System.out.println(greeting);
    for (int i = 0; i < numbers.length; i++) {
      System.out.println(i);
    }
    for (int num : numbers) {
      System.out.print(num + " ");
    }
    System.out.println();
    System.out.println(person);
    System.out.println(person.getName() + person.getAge());
  }
}

// class
class Person {

  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }
}