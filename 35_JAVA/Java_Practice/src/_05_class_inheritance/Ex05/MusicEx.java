package _05_class_inheritance.Ex05;

public class MusicEx {

  public static void main(String[] args) {
    Mp3Player mp3 = new Mp3Player();
    CdPlayer cdp = new CdPlayer();

    System.out.println("=== MP3 Player ===");
    mp3.play();
    mp3.stop();
    System.out.println();
    System.out.println("=== CD Player ===");
    cdp.play();
    cdp.stop();
  }
}
