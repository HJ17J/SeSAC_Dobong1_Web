package springlecture.springbootsecurity.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Slf4j
@Component // 클래스에 해당 어노테이션을 달면, 스프링 컨테이너에서 관리할 수 있도록 해줌
public class CustomAuthFilter extends OncePerRequestFilter {

  @Override
  protected void doFilterInternal (HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    HttpSession session = request.getSession();
    Object userId = session.getAttribute("userId");
    log.warn("filter session check {} {}", session.getId(), userId);

    try {
      if (userId != null) {
        // userid 있을 경우 (로그인 성공)
        // (1) UsernamePasswordAuth~~~Token 토큰 생성
        // -> SecurityContextHolder에 담아 컨트롤러까지 도달 가능하게끔 함
        Authentication authentication = new UsernamePasswordAuthenticationToken(String.valueOf(userId), null,
                                                                                AuthorityUtils.NO_AUTHORITIES);
        // (2) SecurityContextHolder에 담아 컨트롤러에 도달할 수 있도록 함
        SecurityContextHolder.getContext().setAuthentication(authentication); // SecurityContextHolder : 현재 요청에 유효한 공간
      }
    } catch (Exception e) {
      log.error("NoAuthentication");
    }

    filterChain.doFilter(request, response);
  }
}
