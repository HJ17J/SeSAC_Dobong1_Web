package springlecture.springbootsecurity.controller;


import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springlecture.springbootsecurity.dto.UserDTO;
import springlecture.springbootsecurity.entity.UserEntity;
import springlecture.springbootsecurity.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {

  private static final Logger log = LoggerFactory.getLogger(UserController.class);
  @Autowired
  private UserService userService;

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;

  @GetMapping("")
  public String hello (HttpSession session) {
    log.warn("session check {}", session.getId());
    return "hello";
  }

  // ResponseEntity는 사용자의 HttpRequest에 대한 응답 데이터를 포함하는 클래스이다.
  // HttpStatus, HttpHeaders, HttpBody를 포함
  // Return 할 때 객체의 타입이 명확하지 않을 때는 와일드카드(?)를 사용
  @PostMapping("/signup")
  public ResponseEntity<?> registerUser (@RequestBody UserDTO userDTO) {
    try {
      // 요청을 이용해 저장할 사용자 만들기
      UserEntity user = UserEntity.builder()
                                  .email(userDTO.getEmail())
                                  .username(userDTO.getUsername())
                                  .password(passwordEncoder.encode(userDTO.getPassword()))
                                  .build();

      UserEntity registeredUser = userService.create(user);
      UserDTO responseUserDTO = userDTO.builder()
                                       .email(registeredUser.getEmail())
                                       .username(registeredUser.getUsername())
                                       .id(registeredUser.getId())
                                       .build();

      return ResponseEntity.ok().body(responseUserDTO);
    } catch (Exception e) {
      return ResponseEntity
          .badRequest()
          .body(e.getMessage());
    }
  }

  @PostMapping("/signin")
  public ResponseEntity<?> loginUser (HttpSession session, @RequestBody UserDTO userDTO) {
    UserEntity user = userService.getByCredentials(userDTO.getEmail(), passwordEncoder.encode(userDTO.getPassword()));

    if (user != null) {
      // 로그인 성공 시 session에 id 저장 -> 세션 인증/인가 방식 사용
      session.setAttribute("userId", user.getId());
      final UserDTO responseUserDTO = UserDTO.builder()
                                             .email(user.getEmail())
                                             .id(user.getId())
                                             .build();

      return ResponseEntity.ok().body(responseUserDTO);
    } else {
      return ResponseEntity
          .badRequest()
          .body("login failed");
    }
  }
}
