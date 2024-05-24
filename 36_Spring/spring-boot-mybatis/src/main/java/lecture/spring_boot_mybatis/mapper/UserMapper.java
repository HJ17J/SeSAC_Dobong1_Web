package lecture.spring_boot_mybatis.mapper;

import java.util.List;
import lecture.spring_boot_mybatis.domain.User;
import org.apache.ibatis.annotations.Mapper;

// Spring 에게 해당 interface가 매퍼 역할을 하는 interface임을 알림
@Mapper
public interface UserMapper {
  List<User> retrieveAll();
}
