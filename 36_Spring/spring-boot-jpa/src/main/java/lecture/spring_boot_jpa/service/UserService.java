package lecture.spring_boot_jpa.service;

import java.util.List;
import java.util.Optional;
import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public List<UserEntity> getUsers () {
    return userRepository.findAll();
  }

  public List<UserEntity> getUsersByName (String name) {
    //    return userRepository.findByName(name);
    return userRepository.findByNameCustom(name);
  }

  public UserEntity getUserById (int id) {
    Optional<UserEntity> user = userRepository.findById(id);
    // [optionalObj].isPresent() : null이면 false, null이 아니면 true
    if (user.isPresent()) {
      return user.get();
    } else {
      throw new RuntimeException("user not found");
    }
  }

  public UserEntity insertUser (UserCreateDTO user) {
    UserEntity newUser = UserEntity.builder().name(user.getName()).nickname(user.getNickname()).build();
    // save(): insert, update
    // pk가 없으면 insert, pk가 존재하면 update
    return userRepository.save(newUser);
  }

  public UserEntity updateUser (int id, UserCreateDTO user) {
    // 조회된 값이 있다면 userEntity에 담고, 값이 없으면 RuntimeException 발생
    UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new RuntimeException("user not found"));

    UserEntity updateUser = UserEntity.builder()
                                      .id(userEntity.getId())
                                      .name(user.getName())
                                      .nickname(user.getNickname())
                                      .build();
    return userRepository.save(updateUser);
  }

  public UserEntity deleteUser (int id) {
    UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new RuntimeException("user not found"));
    userRepository.delete(userEntity);
    //    userRepository.deleteById(id);
    return userEntity;
  }

  public UserEntity getTodosByUser (int userid) {
    UserEntity user = userRepository.findById(userid).orElseThrow(() -> new RuntimeException("user not found"));
    // UserEntity {id, name, nickname, todos: []}
    return userRepository.findTodosByUser(userid);
  }
}
