package com.team5.remind_server.user.config;

import com.team5.remind_server.user.filter.JwtAuthenticationFilter;
import com.team5.remind_server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@Log4j2
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

    private final UserService userService;

    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .cors().and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests().antMatchers("/board/delete","/board/register", "/board/update").hasAnyAuthority("USER", "ADMIN")
                .antMatchers("/comment/register", "/comment/modify", "/comment/delete/**").hasAnyAuthority("USER", "ADMIN")
                .antMatchers("/", "/auth/**","/board/**", "/comment/**").permitAll();


        http.addFilterAfter(
                jwtAuthenticationFilter,
                CorsFilter.class
        );
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(userService).passwordEncoder(new BCryptPasswordEncoder());
    }

}
