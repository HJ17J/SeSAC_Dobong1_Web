package practice.spring_boot_mybatis_practice.service;

import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import practice.spring_boot_mybatis_practice.domain.Board;
import practice.spring_boot_mybatis_practice.dto.BoardDTO;
import practice.spring_boot_mybatis_practice.mapper.BoardMapper;

@Service
public class BoardService {

  @Autowired
  BoardMapper boardMapper;

  public List<BoardDTO> getAllPost(){
    List<BoardDTO> posts = boardMapper.getAllPost();
    List<Board> list = new ArrayList<>();
//    for(int i=0; i<posts.size(); i++){
//      BoardDTO dto = new BoardDTO();
//      dto.setId(posts.get(i).getId());
//      dto.setId(dto.getId());
//      dto.setTitle(dto.getTitle());
//      dto.setContent(dto.getContent());
//      dto.setWriter(dto.getWriter());
//      dto.setRegistered(dto.getRegistered());
//      list.add(dto);

      // Builder 패턴 이용

//    }
//    return list;
    return posts;
  }

  public int newPost(BoardDTO post){
    return boardMapper.newPost(post);
  }

  public int deletePost(int id){
    return boardMapper.deletePost(id);
  }

  public BoardDTO getPostById(int id){
    return boardMapper.getPostById(id);
  };

  public int updatePost(BoardDTO post){
    return boardMapper.updatePost(post);
  }
}
