package spring.spring_boot_practice.controller._02_dto_vo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import spring.spring_boot_practice.vo.UserVO;

@Controller
@RequestMapping("/user")
public class UserContainer {

  @GetMapping("/registerForm")
  public String registerForm() {
    return "_02_dto_vo/registerForm";
  }

  @PostMapping("/register")
  @ResponseBody
  public UserVO register(@RequestBody UserVO userInfo) {
    System.out.println(userInfo.getName());
    System.out.println(userInfo.getGender());
    System.out.println(userInfo.getBirthday());
    System.out.println(userInfo.getInterests().toString());
    return userInfo;
  }
}
