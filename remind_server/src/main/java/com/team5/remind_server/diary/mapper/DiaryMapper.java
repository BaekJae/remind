//mapper: Mybatis 매핑XML에 기재된 SQL을 호출하기 위한 인터페이스이다.
package com.team5.remind_server.diary.mapper;

import com.team5.remind_server.diary.domain.DiaryDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DiaryMapper { //interface: a shared boundary
    //Create, write
    public int createDiary(DiaryDTO params);

    //Read
    public DiaryDTO  readDiary(int idx);

    //Update
    public int updateDiary(DiaryDTO params);

    //Delete
    public int deleteDiary(int idx);

}
