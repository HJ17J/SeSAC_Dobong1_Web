package lecture.spring_boot_mybatis.mapper;

import java.util.List;
import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

// Spring 에게 해당 interface가 매퍼 역할을 하는 interface임을 알림
@Mapper
public interface UserMapper {
  // GET /user
  List<User> retrieveAll();

  // POST /user
  // @Insert("INSERT INTO USER(name, nickname) VALUES(#{name}, #{nickname})")
  void insertUser(UserCreateDTO user);

  // PATCH /user/{id}
  void updateUser(User user);

  // DELETE /user/{id}
  void deleteUser(int id);
}
