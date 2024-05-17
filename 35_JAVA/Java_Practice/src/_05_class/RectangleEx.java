package _05_class;

import java.util.ArrayList;
import java.util.Scanner;

public class RectangleEx {

  public static void main(String[] args) {
//    try {
    ArrayList<Rectangle> rectangles = new ArrayList<Rectangle>();

    while (true) {
      System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
      Scanner sc = new Scanner(System.in);
      int w = sc.nextInt();
      int h = sc.nextInt();
      if (w == 0 && h == 0) {
        sc.close();
        break;
      }
      Rectangle r = new Rectangle(w);
      r.setHeight(h);
      rectangles.add(r);
    }
    for (Rectangle rectangle : rectangles) {
      System.out.println("가로 길이는: " + rectangle.getWidth());
      System.out.println("세로 길이는: " + rectangle.getHeight());
      System.out.println("넓이는: " + rectangle.getArea());
      System.out.println("-------------------------------");
    }
    System.out.println("Rectangle 인스턴스의 개수는: " + rectangles.size());
//    } catch (IllegalArgumentException e) {
//      System.out.println(e.getMessage());
//    }
  }
}
