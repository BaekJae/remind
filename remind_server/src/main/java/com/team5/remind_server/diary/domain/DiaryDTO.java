//DTO(Data Transfer Object): 계층 간 데이터 교환을 하기 위해 사용하는 객체, getter & setter 만 가진 클래스;로직 가지지 않음
//form -> DTO, DTO를 받은 서버가 DAO를 이용하여 데이터베이스로 데이터를 집어넣음

package com.team5.remind_server.diary.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaryDTO {
    //Diary id
    private int diaryId;

    //Diary date
    private String diaryDate;

    //Diary title
    private String diaryTitle;

    //Diary content
    private String diaryContent;

}
