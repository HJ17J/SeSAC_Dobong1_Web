package lecture.spring_boot_jpa.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class UserDTO {
  private int id;
  private String name;
  private String nickname;
  private int no;
}
