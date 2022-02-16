package com.team5.remind_server.board.domain;

import java.time.LocalTime;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentDTO {
    //댓글 고유번호
    private int commentId;

    //원글 고유번호
    private int noteId;

    //댓글 내용
    private String commentContent;

    //댓글 작성자
    private String commentWriter;

    //댓글 등록일자
    private LocalDate commentRegisteredDate;

    //댓글 등록시간
    private LocalTime commentRegisteredTime;

    //댓글 수정일자
    private LocalDate commentModifiedDate;

    //댓글 수정시간
    private LocalTime commentModifiedTime;
}
