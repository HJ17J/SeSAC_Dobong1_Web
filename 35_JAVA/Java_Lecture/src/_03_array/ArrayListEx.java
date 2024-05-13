package _03_array;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayListEx {
  /*
   * JS에서 제공하는 여러 개의 데이터를 담아두는 자료구조: array, object
   * java: 객체를 효율적으로 추가, 삭제, 검색할 수 있는 interface &
   *
   * */

  /*
   * Java의 Collection
   * List
   * - ArrayList
   * - Vector
   * - LinkedList
   * Set
   * - HashSet
   * - TreeSet
   * Map
   * - HashMap
   * - HashTable
   * - TreeMap
   * - Properties...
   */

  /*
   * ArrayList
   * - List Collection에서 가장 많이 사용되는 컬렉션
   * - 표준 배열보다 조금 느림, 많은 조작이 필요할 경우 유용
   * - 표준 배열과 다르게 배열의 크기를 미리 지정하지 않아도 됨
   * - 표준 배열은 정적 할당, ArrayList는 동적 할당
   */
  public static void main(String[] args) {
    // 1. 리스트 선언
    // List<E> array = new ArrayList<>();
    // List<E> array = new ArrayList<E>();
    // List array = new ArrayList();
    List<Integer> numbers = new ArrayList<>();
    System.out.println(numbers);

    System.out.println("isEmpty? " + numbers.isEmpty());

    // 2. 요소 추가 (add())
    numbers.add(10);
    numbers.add(20);
    numbers.add(30);
    numbers.add(40);
    numbers.add(50);

    System.out.println(numbers);
    System.out.println("contains 10? " + numbers.contains(10));
    System.out.println("contains 12? " + numbers.contains(12));

    // 3. 요소 접근 (get())
    System.out.println("0번째 인덱스 확인 " + numbers.get(0));

    // 4. 요소 수정 (set())
    numbers.set(1, 77);
    System.out.println("요소 변경 후 " + numbers.get(1));

    // 5. 중간에 요소 삽입
    numbers.add(1, 7);
    System.out.println(numbers);

    // 6. ArrayList끼리 연결 (addAll())
    List<Integer> numbers2 = new ArrayList<>(Arrays.asList(100, 99, 98));
    numbers.addAll(numbers2); // 실제 numbers 변경됨
    System.out.println("numbers" + numbers);
    System.out.println("numbers2" + numbers2);

    // 7. 요소의 위치 찾기 (indexOf(value)): 리턴값은 value에 대한 index 번호
    System.out.println(numbers.indexOf(10)); // 0
    System.out.println(numbers.indexOf(100)); // 6
    System.out.println(numbers.indexOf(11)); // 요소 없을 때 -1 반환

    // 8. 요소 삭제 (remove())
    System.out.println("삭제 전: " + numbers);
    numbers.remove(2);
    System.out.println("삭제 후: " + numbers);

    // 9. 리스트의 크기 확인 (size())
    System.out.println("numbers ArrayList의 크기: " + numbers.size());

    // 10. 모든 요소 출력 (for~each문)
    numbers.forEach(num -> System.out.print(num + " "));
    System.out.println();

    // 11. 모든 요소 삭제 (clear())
    numbers.clear();
    System.out.println(numbers);

    // Student 타입의 arraylist 생성
    List<Student> students = new ArrayList<Student>();
    Student std1 = new Student("aaa", 10); // 인스턴스 생성
    Student std2 = new Student("bbb", 20);
    students.add(std1);
    students.add(std2);
    System.out.println(students);
  }
}

class Student {

  private String name;
  private int age;

  public Student(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // getter
  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  // setter
  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

  @Override
  public String toString() {
    return "Student{name:" + name + ", age:" + age + "}}";
  }
}