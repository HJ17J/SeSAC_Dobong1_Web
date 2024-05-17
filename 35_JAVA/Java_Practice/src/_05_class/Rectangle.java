package _05_class;

public class Rectangle {

  private int width;
  private int height;

  public Rectangle(int width, int height) {
//    if (width < 0 || height < 0) {
//      throw new IllegalArgumentException("가로와 세로의 길이는 0보다 큰 양수여야 합니다.");
//    }
    this.width = width;
    this.height = height;
  }

  public Rectangle(int width) {
    this.width = width;
  }

  public int getArea() {
    return width * height;
  }

  public int getWidth() {
    return this.width;
  }

  public void setWidth(int width) {
    this.width = width;
  }

  public int getHeight() {
    return this.height;
  }

  public void setHeight(int height) {
    this.height = height;
  }
}
