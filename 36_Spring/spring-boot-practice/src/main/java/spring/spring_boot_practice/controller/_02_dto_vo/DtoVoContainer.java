package spring.spring_boot_practice.controller._02_dto_vo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import spring.spring_boot_practice.vo.UserVO;

@Controller
@RequestMapping("/vo")
public class DtoVoContainer {

  @GetMapping("/response1")
  @ResponseBody
  public String voAPI1(UserVO userVO) {
    return "이름: " + userVO.getName() + "\n나이: " + userVO.getAge();
  }

  @PostMapping("/response2")
  @ResponseBody
  public String voAPI2(UserVO userVO) {
    return "이름: " + userVO.getName() + "\n나이: " + userVO.getAge();
  }

  @PostMapping("/response3")
  @ResponseBody
  public String voAPI3(@RequestBody UserVO userVO) {
    return "이름: " + userVO.getName() + "\n나이: " + userVO.getAge();
  }
}
