package practice.spring_boot_mybatis_practice.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import practice.spring_boot_mybatis_practice.dto.BoardDTO;

@Mapper
public interface BoardMapper {
  // GET /board
  List<BoardDTO> getAllPost();

  // POST /board
  int newPost(BoardDTO boardDTO);

  // DELETE /board/{id}
  int deletePost(int id);

  // GET /board/{id}
  BoardDTO getPostById(int id);

  // PATCH /board/{id}
  int updatePost(BoardDTO boardDTO);
}
