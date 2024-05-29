package practice.spring_boot_jpa_practice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "Board")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  // column명과 entity field명이 동일할 경우 name은 생략 가능
  @Column(name = "title", nullable = false, length = 20)
  private String title;

  @Column(name = "content", nullable = false, length = 100)
  private String content;

  @Column(name = "writer", nullable = false, length = 10)
  private String writer;

  @CreationTimestamp
  private Date registered;
}
