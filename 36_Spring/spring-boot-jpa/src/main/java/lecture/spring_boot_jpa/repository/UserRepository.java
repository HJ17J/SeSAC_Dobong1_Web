package lecture.spring_boot_jpa.repository;

import java.util.List;
import java.util.Optional;
import lecture.spring_boot_jpa.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

  List<UserEntity> findAll ();

  List<UserEntity> findByName (String name);

  Optional<UserEntity> findById (int id);

  // raw query 사용
  // JPA 자체적인 SQL -> JPQL
  // JPQL: Java Persistence Query Language
  // @Query(nativeQuery = true, value="native query")
  // @Query(nativeQuery = true, value = "SELECT * FROM USER WHERE name = :name")
  @Query("SELECT u FROM UserEntity u WHERE u.name = :name")
  List<UserEntity> findByNameCustom (String name);

  @Query("SELECT u FROM UserEntity u Join FETCH u.todos WHERE u.id = :userid")
  UserEntity findTodosByUser (int userid);
}
