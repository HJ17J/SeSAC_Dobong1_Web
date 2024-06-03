package springlecture.springbootsecurity.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("todo")
public class ToDoController {

  @GetMapping("")
  public String getTodo (@AuthenticationPrincipal String userId) {
    // @AuthenticationPrincipal: SecurityContextHolder에 담아둔 정보를 가져옴
    return "getTodoSuccess" + userId;
  }
}
