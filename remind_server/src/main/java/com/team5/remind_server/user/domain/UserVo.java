package com.team5.remind_server.user.domain;

import lombok.Data;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Data
public class UserVo implements UserDetails {
    private String userId; //아이디
    private String userPassword; //비밀번호
    private String userName; //이름
    private String userMail; //이메일
    private String userAuth; //권한정보
    private String userNickName; //닉네임
    private boolean userIsExpert; //전문가 여부

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        ArrayList<GrantedAuthority> authList = new ArrayList<GrantedAuthority>();
        authList.add(new SimpleGrantedAuthority(userAuth));
        return authList;
    }

    @Override
    public String getPassword(){
        return this.userPassword;
    }

    @Override
    public String getUsername(){
        return this.userId;
    }

    public String getUserName(){
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired(){
        return true;
    }

    @Override
    public boolean isAccountNonLocked(){
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
