package _05_class.f_interface;

public class Audio implements RemoteControl {

  private int volume;

  @Override
  public void turnOn() {
    System.out.println("Audio is on");
  }

  @Override
  public void turnOff() {
    System.out.println("Audio is off");
  }

  @Override
  public void setVolume(int volume) {
    if (volume > RemoteControl.MAX_VOLUME) {
      this.volume = RemoteControl.MAX_VOLUME;
    } else if (volume < RemoteControl.MIN_VOLUME) {
      this.volume = RemoteControl.MAX_VOLUME;
    } else {
      this.volume = volume;
    }
    System.out.println("Audio Volume: " + this.volume);
  }
}
