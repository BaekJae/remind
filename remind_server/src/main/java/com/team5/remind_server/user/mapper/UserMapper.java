package com.team5.remind_server.user.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.team5.remind_server.user.domain.UserVo;

@Mapper
public interface UserMapper {
    // 로그인
    UserVo getUserAccount(String userId);

    // 회원가입
    void saveUser(UserVo userVo);
}
