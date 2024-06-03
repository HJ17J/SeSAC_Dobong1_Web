package springlecture.springbootsecurity.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
@Slf4j
public class JwtAuthFilter extends OncePerRequestFilter {

  @Autowired
  private TokenProvider tokenProvider;

  @Override
  protected void doFilterInternal (HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    try{
      // [session 인증 방식]
      // (1) Http Session에 존재하는 userId 값을 확인
      // (2) userid가 존재하면 SecurityContextHolder에 UserNamePasswordAuthToken 만들어서 저장

      // [token 인증 방식]
      // (1) 요청의 Header에 담겨 온 token을 뽑아서 해당 토큰이 유효한지 확인
      // (2) SecurityContextHolder에 UserNamePasswordAuthToken 만들어서 저장
      String token = parseBearerToken(request);
      log.warn("Filter Token Check {}", token);

      // equalsIgnoreCase(): case-insensitive하게 비교
      if(token!=null && !token.equalsIgnoreCase("null")){
        String userId = tokenProvider.getValidatedUserId(token);
        Authentication authentication = new UsernamePasswordAuthenticationToken(userId, null, AuthorityUtils.NO_AUTHORITIES);
        SecurityContextHolder.getContext().setAuthentication(authentication);
      }
    }catch(Exception e){
      log.error("Auth Check Error::: {}", e.getMessage());
    }

    filterChain.doFilter(request, response);
  }

  public String parseBearerToken(HttpServletRequest request){
    // 요청의 header의 bearer 토큰에서 jwt 토큰을 뽑아오는 과정
    String bearerToken = request.getHeader("Authorization");

    // null, 공백이 아닌지 검사
    if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
      // "Bearer abcdefg" -> "abcdefg"
      return bearerToken.substring(7);
    }
    return null;
  }
}
