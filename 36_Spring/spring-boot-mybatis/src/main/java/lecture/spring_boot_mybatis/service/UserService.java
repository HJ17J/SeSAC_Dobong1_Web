package lecture.spring_boot_mybatis.service;

import java.util.ArrayList;
import java.util.List;
import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserMapper userMapper;

  public List<UserDTO> getUserList(){
    List<User> result = userMapper.retrieveAll();
    List<UserDTO> users = new ArrayList<UserDTO>();
    int i = 1;
    for(User user : result){
      UserDTO userDTO = new UserDTO();
      userDTO.setId(user.getId());
      userDTO.setName(user.getName());
      userDTO.setNickname(user.getNickname());
      userDTO.setNo(i);
      users.add(userDTO);
      i++;
    }
    return users;
  }

  public void insertUser(UserCreateDTO user){
    System.out.println("service here!!!");
    System.out.println(user.getName());
    System.out.println(user.getNickname());
    userMapper.insertUser(user);
  }

  public void updateUser(int id, UserCreateDTO user){
    User updateUserInfo = new User();
    updateUserInfo.setId(id);
    updateUserInfo.setName(user.getName());
    updateUserInfo.setNickname(user.getNickname());
    System.out.println("service here!!!");
    System.out.println(updateUserInfo.getId());
    System.out.println(updateUserInfo.getName());
    System.out.println(updateUserInfo.getNickname());
    userMapper.updateUser(updateUserInfo);
  }

  public void deleteUSer(int id){
    userMapper.deleteUser(id);
  }
}
