package _05_class.f_interface;

public interface RemoteControl {

  // 메소드
  // interface는 추상 메소드를 반드시 포함해야 합니다.
  // 인터페이스에서 추상 메소드 선언 시 abstract 키워드는 생략해도 됩니다.
  public void turnOn();

  public void turnOff();

  public void setVolume(int volume);

  // 필드
  // 상수 이외의 필드 선언 불가
  int MAX_VOLUME = 10; //static final 키워드 컴파일러가 자동으로 추가
  static final int MIN_VOLUME = 0;
}
