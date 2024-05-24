package springlecture.springbootthymeleaf.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
//@RequestMapping("/practice")
public class PracticeContainer {

  @GetMapping("/prac01")
  public String prac01(Model model) {
    model.addAttribute("age", 15);
    return "prac01";
  }

  @GetMapping("/people")
  public String prac02(Model model) {
    List<Person> people = new ArrayList<>();
    Person p1 = new Person("kim", 10);
    Person p2 = new Person("lee", 20);
    Person p3 = new Person("hong", 30);
    Person p4 = new Person("park", 40);
    Person p5 = new Person("shin", 50);

    people.add(p1);
    people.add(p2);
    people.add(p3);
    people.add(p4);
    people.add(p5);

    model.addAttribute("people", people);
    return "prac02";
  }

  @GetMapping("/introduce/{name}")
  public String introduce(@PathVariable String name, Model model) {
    model.addAttribute("name", name);
    return "prac03";
  }

  @GetMapping("/introduce2")
  public String introduce2(@RequestParam String name, @RequestParam(required = false) Integer age,
      Model model) {
    model.addAttribute("name", name);
    model.addAttribute("age", age);
    return "prac03";
  }

  @GetMapping("/prac04")
  public String prac04(Model model) {
//    생년월일 option 기본 데이터 전달
//    int[] years = IntStream.rangeClosed(1970, 2024).toArray();
//    int[] months = IntStream.rangeClosed(1, 12).toArray();
//    int[] dates = IntStream.rangeClosed(1, 31).toArray();
//    model.addAttribute("years", years);
//    model.addAttribute("months", months);
//    model.addAttribute("dates", dates);
    return "prac04";
  }

  @PostMapping("/register")
  public String register(@RequestParam String name, @RequestParam String gender,
      @RequestParam int year, @RequestParam int month, @RequestParam int date,
      @RequestParam String[] interests, Model model) {
//    interests 배열 요소 사이에 컴마 추가하여 String으로 반환
//    String interest = String.join(",", interests);
    model.addAttribute("name", name);
    model.addAttribute("gender", gender);
    model.addAttribute("year", year);
    model.addAttribute("month", month);
    model.addAttribute("date", date);
    model.addAttribute("interests", interests);
    model.addAttribute("registered", true);
    return "prac04";
  }

  @AllArgsConstructor
  public class Person {

    private String name;
    private int age;

//    public Person(String name, int age) {
//      this.name = name;
//      this.age = age;
//    }

    public String getName() {
      return name;
    }

    public int getAge() {
      return age;
    }
  }

}
