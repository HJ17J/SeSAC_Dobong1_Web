package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "todo")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToDoEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(nullable = false, length = 30)
  private String title;

  @Column(nullable = false)
  @Builder.Default
  private boolean done = false;

  @ManyToOne
  @JsonBackReference // User와 ToDo 사이의 순환참조 방지
  @JoinColumn(name = "userId", nullable = false)
  private UserEntity user;


}


