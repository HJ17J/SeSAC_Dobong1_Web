package _02_control_statement;

import java.util.ArrayList;
import java.util.List;

public class Loop {

  public static void main(String[] args) {
    // while문
    int i = 1;
    System.out.println("while 문");
    while (i <= 10) {
      System.out.println(i);
      i++;
    }

    // do-while문
    System.out.println("do-while 문");
    i = 1;
    do {
      System.out.println(i); // do를 먼저 실행
      i++;
    } while (i <= 10);  // 조건 검사를 나중에 함

    // 배열과 for문 작성
    // for-each문
    String[] arr = {"A", "B", "C"};
    for (String s : arr) {
      System.out.println("str: " + s);
    }

    // arraylist
    List<String> list = new ArrayList<>();
    list.add("A");
    list.add("B");
    list.add("C");

    // foreach with lambda (익명함수)
    list.forEach(data -> System.out.println("data: " + data));
  }
}
