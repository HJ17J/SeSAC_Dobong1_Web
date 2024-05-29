package practice.spring_boot_jpa_practice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BoardCreateDTO {

  private String title;
  private String content;
  private String writer;
}
