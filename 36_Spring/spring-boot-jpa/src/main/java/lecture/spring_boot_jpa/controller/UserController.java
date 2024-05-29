package lecture.spring_boot_jpa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lecture.spring_boot_jpa.dto.ResErrorDTO;
import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserService userService;

  // GET /user
  //  @GetMapping("")
  //  public List<UserEntity> getAllUser(){
  //    return userService.getUsers();
  //  }

  // RespnseEntity
  // 적절한 응답 코드 및 본문을 생성해주는 역할을 함
  @GetMapping("")
  public ResponseEntity<List<UserEntity>> getAllUser () {
    List<UserEntity> users = userService.getUsers();
    //  return ResponseEntity.ok().body(users); // 아래와 동일
    return ResponseEntity.ok(users);
  }

  @GetMapping("/name/{name}")
  public ResponseEntity<?> getUserByName (@PathVariable String name) {
    List<UserEntity> users = userService.getUsersByName(name);
    //    List<UserDTO> resUsers = new ArrayList<>();
    //
    //    for(int i=0; i<users.size(); i++){
    //        UserDTO user = UserDTO.builder()
    //                          .id(users.get(i).getId())
    //                          .name(users.get(i).getName())
    //                          .nickname(users.get(i).getNickname())
    //                          .build();
    //        resUsers.add(user);
    //    }

    List<UserDTO> resUsers = users.stream()
                                  .map(user -> UserDTO.builder().id(user.getId()).name(user.getName())
                                                      .nickname(user.getNickname()).build())
                                  .collect(Collectors.toList());

    return ResponseEntity.ok().body(resUsers);
  }

  @GetMapping("/id/{id}")
  public ResponseEntity<?> getUserById (@PathVariable int id) {
    try {
      return ResponseEntity.ok(userService.getUserById(id));
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }

  @PostMapping("")
  public ResponseEntity<?> insertUser (@RequestBody UserCreateDTO user) {
    try {
      UserEntity newUser = userService.insertUser(user);
      UserDTO userDTO = UserDTO.builder()
                               .id(newUser.getId())
                               .name(newUser.getName())
                               .nickname(newUser.getNickname())
                               .build();
      return ResponseEntity.ok(userDTO);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(ResErrorDTO.builder().error(e.getMessage()).build());
    }
  }

  @PatchMapping("/{id}")
  public ResponseEntity<?> patchUser (@PathVariable int id, @RequestBody UserCreateDTO user) {
    try {
      UserEntity updatedUser = userService.updateUser(id, user);
      return ResponseEntity.ok(updatedUser);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(ResErrorDTO.builder().error(e.getMessage()).build());
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteUser (@PathVariable int id) {
    try {
      return ResponseEntity.ok().body(userService.deleteUser(id));
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(ResErrorDTO.builder().error(e.getMessage()).build());
    }
  }

  @GetMapping("/todos/{userid}")
  public ResponseEntity<?> getTodoByUser (@PathVariable int userid) {
    try {
      UserEntity todos = userService.getTodosByUser(userid);
      return ResponseEntity.ok().body(todos);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(ResErrorDTO.builder().error(e.getMessage()).build());
    }
  }
}
