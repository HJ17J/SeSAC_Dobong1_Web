package practice.spring_boot_jpa_practice.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import practice.spring_boot_jpa_practice.dto.BoardCreateDTO;
import practice.spring_boot_jpa_practice.entity.BoardEntity;
import practice.spring_boot_jpa_practice.repository.BoardRepository;

@Service
public class BoardService {

  @Autowired
  BoardRepository boardRepository;

  public List<BoardEntity> getAllPosts () {
    return boardRepository.findAll();
  }

  public BoardEntity addPost (BoardCreateDTO post) {
    BoardEntity newPost = BoardEntity.builder()
                                     .title(post.getTitle()).content(post.getContent()).writer(post.getWriter())
                                     .build();
    return boardRepository.save(newPost);
  }

  public BoardEntity updatePost (int id, BoardCreateDTO post) {
    BoardEntity boardEntity = boardRepository.findById(id).orElseThrow(() -> new RuntimeException("post not found"));
    BoardEntity updatePost = BoardEntity.builder()
                                        .id(boardEntity.getId())
                                        .title(post.getTitle()).content(post.getContent()).writer(post.getWriter())
                                        .build();
    return boardRepository.save(updatePost);
  }

  public BoardEntity deletePost (int id) {
    BoardEntity boardEntity = boardRepository.findById(id).orElseThrow(() -> new RuntimeException("post not found"));
    boardRepository.delete(boardEntity);
    return boardEntity;
  }
}
