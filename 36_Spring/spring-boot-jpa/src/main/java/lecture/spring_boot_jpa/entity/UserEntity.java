package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Getter
@Builder // 전체 필드를 받는 생성자를 필요로 함
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "name", nullable = false, length = 10)
  private String name;

  @Column(name = "nickname", nullable = false, length = 20)
  private String nickname;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  @JsonManagedReference // User와 ToDo 사이의 순환참조 방지
  private List<ToDoEntity> todos;
}
