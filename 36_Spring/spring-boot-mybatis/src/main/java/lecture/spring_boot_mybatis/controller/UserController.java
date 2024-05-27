package lecture.spring_boot_mybatis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@Slf4j
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("")
  @ResponseBody
  public List<UserDTO> getUsers(){
    return userService.getUserList();
  }

  @PostMapping("")
  @ResponseBody
  public Map<String, Boolean> insertUser(@RequestBody UserCreateDTO user){
    userService.insertUser(user);

    Map<String, Boolean> result = new HashMap<>();
    result.put("result", true);
    return result;
  }

  @PatchMapping("/{id}")
  public Map<String, Boolean> patchUser(@PathVariable int id, @RequestBody UserCreateDTO user){
    Map<String, Boolean> result = new HashMap<>();
    try{
      userService.updateUser(id, user);
      result.put("result", true);
    }catch (Exception e){
      System.out.println(e.getMessage());
      log.error("patch error {}" +  e.getMessage());
      log.error("patch error {}", e.getMessage());
      result.put("result", false);
    }
    return result;
  }

  @DeleteMapping("/{id}")
  public int deleteUser(@PathVariable int id){
    userService.deleteUSer(id);
    return 1;
  }
}

