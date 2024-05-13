package _03_Array;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ArrayListPractice {

  public static void main(String[] args) {
    List<String> strList = new ArrayList<>();
    Scanner sc = new Scanner(System.in);
    while (true) {
      System.out.println("문자를 입력해주세요.");
      String word = sc.nextLine();
      strList.add(word);
      if (word.equals("exit")) {
        for (String str : strList) {
          System.out.println(str);
        }
        break;
      }
    }
  }
}
