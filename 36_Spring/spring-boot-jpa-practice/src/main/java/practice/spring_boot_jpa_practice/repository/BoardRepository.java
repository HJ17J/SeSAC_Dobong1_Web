package practice.spring_boot_jpa_practice.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import practice.spring_boot_jpa_practice.entity.BoardEntity;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {

  Optional<BoardEntity> findById (int id);
}
