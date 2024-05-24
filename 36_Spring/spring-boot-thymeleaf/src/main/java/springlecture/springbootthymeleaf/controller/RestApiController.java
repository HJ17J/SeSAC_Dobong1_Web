package springlecture.springbootthymeleaf.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springlecture.springbootthymeleaf.dto.UserDTO;

@RestController
@RequestMapping("/restapi")
public class RestApiController {

  @GetMapping("/user")
  public String get() {
    String name = "lily";
    int age = 88;
    return name + ", " + age;
  }

  @PostMapping("/user")
  public String post(@RequestBody UserDTO user) {
    // 모델 연결 후 db 삽입
    return user.getName() + ", " + user.getAge();
  }

  @PatchMapping("/user/{id}")
  public String patch(@PathVariable("id") int id, @RequestBody UserDTO user) {
    // 모델 연결 후 db 수정
    return id + "님의 정보 수정: " + user.getName() + ", " + user.getAge();
  }

  @DeleteMapping("/user/{id}")
  public String delete(@PathVariable int id) {
    // 모델 연결 후 db 삭제
    return id + "님의 정보 삭제";
  }
}
