package springlecture.springbootsecurity.jwt;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties("jwt")
public class JwtProperties {
  // application.properties의 값을 자바 클래스의 필드와 매핑 
  private String issuer;
  private String secretKey;
}
