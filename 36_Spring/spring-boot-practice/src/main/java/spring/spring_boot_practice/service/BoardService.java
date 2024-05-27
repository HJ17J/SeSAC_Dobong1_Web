package spring.spring_boot_practice.service;

import org.springframework.beans.factory.annotation.Autowired;
import spring.spring_boot_practice.mapper.BoardMapper;

public class BoardService {

  @Autowired
  private BoardMapper boardMapper;
}
