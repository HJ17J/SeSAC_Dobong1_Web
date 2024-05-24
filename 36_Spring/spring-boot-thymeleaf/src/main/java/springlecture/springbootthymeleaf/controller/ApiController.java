package springlecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import springlecture.springbootthymeleaf.dto.UserDTO;
import springlecture.springbootthymeleaf.dto.UserVO;

@Controller
@RequestMapping("/api")
public class ApiController {

  // 컨트롤러에서 에러가 발생할 경우
  @ExceptionHandler
  public String errorHandler(Exception e) {
    System.out.println("error: " + e.getMessage());
    return "error";
  }

  // GET localhost:8080/api
  @GetMapping("")
  public String get() {
    return "api";
  }

  // GET localhost:8080/api/res1?name={name}&age={age}
  @GetMapping("/res1")
  public String getRes1(@RequestParam(value = "name") String nickname,
      @RequestParam(required = false, value = "age") Integer age, Model model) {
    model.addAttribute("name", nickname);
    model.addAttribute("age", age);
    return "res";
  }

  // GET localhost:8080/api/res2/{name}/{age}
  @GetMapping({"/res2/{name}", "/res2/{name}/{param2}"})
  public String getRes2(@PathVariable String name,
      @PathVariable(value = "param2", required = false) Integer age,
      Model model) {
    model.addAttribute("name", name);
    model.addAttribute("age", age);
    return "res";
  }

  @PostMapping("/res3")
  public String postRes(@RequestParam String name, @RequestParam int age, Model model) {
    model.addAttribute("name", name);
    model.addAttribute("age", age);
    return "res";
  }

  @PostMapping("/res3/{param1}")
  public String postRes2(@PathVariable String param1, @RequestParam String name,
      @RequestParam int age, Model model) {
    System.out.println("param1: " + param1);
    model.addAttribute("name", name);
    model.addAttribute("age", age);
    return "res";
  }

  @GetMapping("/res4")
  @ResponseBody
  public String postRes3() {
    return "hello";
  }

  @GetMapping("/registerDTO")
  public String getRes5() {
    return "registerView";
  }

  @PostMapping("/res5")
  public String postRes5(@ModelAttribute UserDTO user, Model model) {
    // @ModelAttribute
    // 객체로 데이터를 전송받게끔 도와줌. 해당 객체의 setter를 이용해서 데이터를 매핑시킴
    // url에 있는 데이터를 매핑
    // 생략 가능
    model.addAttribute("name", user.getName());
    model.addAttribute("age", user.getAge());
    return "res";
  }

  @GetMapping("/registerVO")
  public String getRes6() {
    return "registerView";
  }

  @PostMapping("/res6")
  public String postRes6(@ModelAttribute UserVO user, Model model) {
    model.addAttribute("name", user.getName());
    model.addAttribute("age", user.getAge());
    return "res";
  }

  @GetMapping("/res7")
  public String postRes7(@RequestBody UserDTO user, Model model) {
    // Get 요청이므로 RequestBody 없어서 에러남
    model.addAttribute("name", user.getName());
    model.addAttribute("age", user.getAge());
    return "res";
  }

  @PostMapping("/res8")
  public String postRes8(@RequestBody UserDTO user, Model model) {
    // @RequestBody는 application/json 형태의 Content-Type을 매핑할 수 있음
    // 일반 폼 전송의 Content-Type은 application/x-www-form-urlencoded이므로 에러남
    model.addAttribute("name", user.getName());
    model.addAttribute("age", user.getAge());
    return "res";
  }

  @PostMapping("/res9")
  @ResponseBody
  public String postRes9(@RequestBody UserDTO user) {
    return user.getName() + "님 환영합니다.";
  }

  @PostMapping("/res10")
  @ResponseBody
  public String postRes9(@RequestBody UserVO user) {
    // @RequestBody는 dto 객체의 setter를 이용해서 매핑하지 않고 @RequestBody의 자체적인 메소드로 매핑함 (정상 작동)
    return user.getName() + "님 환영합니다.";
  }
}
