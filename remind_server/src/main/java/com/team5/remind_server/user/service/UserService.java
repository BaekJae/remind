package com.team5.remind_server.user.service;

import com.team5.remind_server.user.domain.UserVo;
import com.team5.remind_server.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Log4j2
@Service
@RequiredArgsConstructor
public class UserService  implements UserDetailsService {

    private final UserMapper userMapper;

    @Transactional
    public void joinUser(UserVo userVo){
        log.info("UserVo: " + userVo);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userVo.setUserPassword(passwordEncoder.encode(userVo.getPassword()));
        userVo.setUserAuth("USER");
        userMapper.saveUser(userVo);
    }

    @Override
    public UserVo loadUserByUsername(String userId) throws UsernameNotFoundException{
        UserVo result = userMapper.getUserAccount(userId);
        if(result == null){
            throw new UsernameNotFoundException(userId);
        }
        return result;
    }

}
