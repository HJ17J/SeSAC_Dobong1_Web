package _02_control_statement;

import java.util.Scanner;

public class Method_Practice_2 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int radius = sc.nextInt();
    System.out.printf("반지름이 %d인 원의 넓이: %f", radius, area(radius)).println();

    int width = sc.nextInt();
    int height = sc.nextInt();
    System.out.printf("가로 %d, 세로 %d인 직사각형의 넓이: %.1f", width, height, area(width, height)).println();

    float width2 = sc.nextInt();
    int height2 = sc.nextInt();
    System.out.printf("밑변 %.0f, 높이 %d인 삼각형의 넓이: %.1f", width2, height2, area(width2, height2)).println();
  }

  public static double area(int radius){
    return radius * radius * Math.PI;
  }

  public static float area(int width, int height){
    return width * height;
  }

  public static float area(float width, int height){
    return width * height / 2;
  }
}
