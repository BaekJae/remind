package com.team5.remind_server.user.controller;

import com.team5.remind_server.user.config.JwtTokenProvider;
import com.team5.remind_server.user.domain.SignVo;
import com.team5.remind_server.user.domain.UserVo;
import com.team5.remind_server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user/*")
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final UserService userService;

    private final JwtTokenProvider jwtTokenProvider;
    @RequestMapping(path="/register", method=RequestMethod.POST)
    public void register(@RequestBody UserVo userVo){
        userService.joinUser(userVo);
    }

    @RequestMapping(path="/login", method = RequestMethod.POST)
    public SignVo login(@RequestBody UserVo userVo){
        UserVo member = userService.loadUserByUsername(userVo.getUsername());
        SignVo signVo = new SignVo();
        if(!passwordEncoder.matches(userVo.getPassword(), member.getPassword())){
            signVo.setResult("fail");
            signVo.setMessage("ID or password is invalid");
            return signVo;
        }
        List<String> roleList = Arrays.asList(member.getUserAuth().split(","));
        signVo.setResult("success");
        signVo.setToken(jwtTokenProvider.createToken(member.getUserId(), roleList));
        return signVo;
    }

    @RequestMapping(path="/user_access", method=RequestMethod.GET)
    public UserVo userAccess(Authentication authentication){
        UserVo userVo = (UserVo) authentication.getPrincipal();
        return userVo;
    }
}
