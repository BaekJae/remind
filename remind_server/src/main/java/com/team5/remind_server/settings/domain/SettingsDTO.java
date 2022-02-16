package com.team5.remind_server.settings.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SettingsDTO {
    //개인 정보 수정

    //세션 유지 설정 (자동로그인)
    private int manageSession;

    //페이지 순서 설정
    private int manageOrder;

    //테마
    private int manageTheme;

    //웹 알림설정
    private int manageAlert;

    //즐겨찾는 게시판 (스타)
    private int boardStar;

    //좋아요 한 글 (하트)
    private int boardHeart;

    //통계
    private String boardStatistics;

    //다이어리 커스텀

    //다이어리DB

}
