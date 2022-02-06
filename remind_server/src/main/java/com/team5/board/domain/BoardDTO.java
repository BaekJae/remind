package com.team5.board.domain;

import java.time.LocalTime;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDTO {
    //게시글 번호
    private int noteId;

    //게시판 Id
    private int boardId;

    //게시글 제목
    private String noteTitle;

    //글쓴이
    private String noteWriter;

    //작성일자
    private LocalDate noteWritedDate;

    //작성시간
    private LocalTime noteWritedTime;

    //게시글 내용
    private String noteContent;

    //게시글 이미지(경로만)
    private String noteImage;

    //게시글 조회수
    private int noteViews;

    //게시글 좋아요 수
    private int notePrefer;

    //게시글의 전문가 작성여부
    private int noteIsExpert;

    //게시글 업데이트 날짜
    private LocalDate noteUpdatedDate;

    //게시글 업데이트 시간
    private LocalTime noteUpdatedTime;
}
