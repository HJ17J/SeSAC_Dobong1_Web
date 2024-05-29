package practice.spring_boot_jpa_practice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import practice.spring_boot_jpa_practice.dto.BoardCreateDTO;
import practice.spring_boot_jpa_practice.dto.ResErrorDTO;
import practice.spring_boot_jpa_practice.service.BoardService;

@Controller
@RequestMapping("/board")
public class BoardController {

  @Autowired
  BoardService boardService;

  @GetMapping("")
  public String getAllPosts (Model model) {
    model.addAttribute("posts", boardService.getAllPosts());
    return "board";
  }

  @PostMapping("")
  @ResponseBody
  public ResponseEntity<?> addPost (Model model, @RequestBody BoardCreateDTO post) {
    try {
      boardService.addPost(post);
      return ResponseEntity.ok().body(HttpStatus.OK);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }

  @PatchMapping("/update/{id}")
  public ResponseEntity<?> updatePost (Model model, @PathVariable int id, @RequestBody BoardCreateDTO post) {
    try {
      boardService.updatePost(id, post);
      return ResponseEntity.ok().body(HttpStatus.OK);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }

  @DeleteMapping("/board/{id}")
  public ResponseEntity<?> deletePost (@PathVariable int id) {
    try {
      return ResponseEntity.ok().body(boardService.deletePost(id));
    } catch (Exception e) {
      return ResponseEntity.badRequest()
                           .body(ResErrorDTO.builder()
                                            .error(e.getMessage()).status(HttpStatus.NOT_FOUND)
                                            .build());
    }
  }
}
