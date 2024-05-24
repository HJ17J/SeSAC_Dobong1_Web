package spring.spring_boot_practice.controller._02_dto_vo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import spring.spring_boot_practice.dto.UserDTO;
import spring.spring_boot_practice.vo.UserVO;

@Controller
@RequestMapping("/axios")
public class AxiosContainer {

  // GET /axios/form
  @GetMapping("")
  public String axiosForm() {
    return "_02_dto_vo/form";
  }

  //  GET /axios/response1
  @GetMapping("/response1")
  public String response1(@RequestParam UserVO userVO) {
    return "이름: " + userVO.getName() + "\n나이: " + userVO.getAge();
  }

  //  GET /axios/response2
  @GetMapping("/response2")
  public String response2(@ModelAttribute UserDTO userDTO) {
    return "이름: " + userDTO.getName() + "\n나이: " + userDTO.getAge();
  }

  //  POST /axios/response3
  @PostMapping("/response3")
  public String response3(@RequestParam UserDTO userDTO) {
    return "이름: " + userDTO.getName() + "\n나이: " + userDTO.getAge();
  }

  //  POST /axios/response4
  @PostMapping("/response4")
  public String response4(@ModelAttribute UserDTO userDTO) {
    return "이름: " + userDTO.getName() + "\n나이: " + userDTO.getAge();
  }

  //  POST /axios/response5
  @PostMapping("/response5")
  public String response5(@RequestBody UserDTO userDTO) {
    return "이름: " + userDTO.getName() + "\n나이: " + userDTO.getAge();
  }
}
