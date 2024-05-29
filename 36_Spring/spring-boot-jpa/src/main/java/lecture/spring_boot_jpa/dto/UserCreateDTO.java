package lecture.spring_boot_jpa.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserCreateDTO {
  private String name;
  private String nickname;
}
