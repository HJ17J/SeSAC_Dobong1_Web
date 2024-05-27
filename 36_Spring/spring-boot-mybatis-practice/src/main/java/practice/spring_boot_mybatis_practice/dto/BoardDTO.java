package practice.spring_boot_mybatis_practice.dto;

import java.util.Date;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder // 객체를 생성하는 것을 도와주는 도구
// 전체 필드를 인자로 받는 생성자를 자동으로 생성

public class BoardDTO {
  private int id;
  private String title;
  private String content;
  private String writer;
  private Date registered;
}
