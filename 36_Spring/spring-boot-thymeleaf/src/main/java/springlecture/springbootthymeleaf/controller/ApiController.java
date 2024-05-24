package springlecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

}
