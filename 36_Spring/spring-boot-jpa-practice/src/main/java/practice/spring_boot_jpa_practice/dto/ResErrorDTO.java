package practice.spring_boot_jpa_practice.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@Builder
public class ResErrorDTO {

  private String error;
  private HttpStatus status;
}
