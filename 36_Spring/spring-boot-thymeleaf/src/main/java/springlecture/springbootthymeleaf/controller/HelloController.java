package springlecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
  // localhost:8080/hi
  @GetMapping("/hi")
  public String hello(Model model) {
    Hello hello = new Hello();
    String[] fruits = {"apple", "banana","grape"};
    model.addAttribute("msg", "Hi");
    model.addAttribute("msg2", "<h3>안녕?</h3>");
    model.addAttribute("age", 17);
    model.addAttribute("userType", "Admin");
    model.addAttribute("fruits", fruits);
    model.addAttribute("url", "https://www.google.com/");
    model.addAttribute("hello", hello);
    return "hi";
  }

  class Hello{
    private String msg = "Hello!";

    public String getMsg(){
      return msg;
    }
  }
}
