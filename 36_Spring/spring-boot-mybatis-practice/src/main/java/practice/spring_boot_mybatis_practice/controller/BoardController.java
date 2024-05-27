package practice.spring_boot_mybatis_practice.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import practice.spring_boot_mybatis_practice.dto.BoardDTO;
import practice.spring_boot_mybatis_practice.service.BoardService;

@Controller
@RequestMapping("/board")
public class BoardController {

  @Autowired
  private BoardService boardService;

  @GetMapping("")
  public String getAllPost(Model model){
    List<BoardDTO> posts = boardService.getAllPost();
    model.addAttribute("posts", posts);
    return "BoardList";
  }

  @PostMapping("")
  @ResponseBody
  public int addPost(@RequestBody BoardDTO post){
    System.out.println(post.getTitle());
    System.out.println(post.getContent());
    System.out.println(post.getWriter());
    System.out.println(post.getRegistered());
    int result = boardService.newPost(post);
    return result;
  }

  @DeleteMapping("/{id}")
  @ResponseBody
  public int deletePost(@PathVariable int id){
    System.out.println("controller!");
    System.out.println(id);
    int result = boardService.deletePost(id);
    return result;
  }

  @GetMapping("/{id}")
  @ResponseBody
  public BoardDTO getPostById(@PathVariable int id){
    BoardDTO post = boardService.getPostById(id);
    return post;
  }

  @PatchMapping("/{id}")
  @ResponseBody
  public int updatePost(@RequestBody BoardDTO post){
    int result = boardService.updatePost(post);
    return result;
  }
}
