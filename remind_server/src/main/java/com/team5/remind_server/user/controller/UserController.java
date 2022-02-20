package com.team5.remind_server.user.controller;

import com.team5.remind_server.user.config.JwtTokenProvider;
import com.team5.remind_server.user.domain.SignVo;
import com.team5.remind_server.user.domain.UserVo;
import com.team5.remind_server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/auth/*")
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final JwtTokenProvider jwtTokenProvider;

    private final UserService userService;

    @RequestMapping(path="/register", method=RequestMethod.POST)
    public void register(@RequestBody UserVo userVo){

        userService.joinUser(userVo);
    }

    @RequestMapping(path="/getUserId", method=RequestMethod.POST)
    public String getUserId(@RequestBody SignVo tokenSignVo){ //사용자 아이디 리턴
        String inputToken = tokenSignVo.getToken();
        return jwtTokenProvider.getUserPk(inputToken);
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
}
