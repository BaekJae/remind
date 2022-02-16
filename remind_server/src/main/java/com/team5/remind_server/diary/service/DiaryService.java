package com.team5.remind_server.diary.service;

import com.team5.remind_server.diary.domain.DiaryDTO;

public interface DiaryService {

    //Create, write
    public int createDiary(DiaryDTO params);

    //Read
    public DiaryDTO readDiary(int idx);

    //Update
    public int updateDiary(DiaryDTO params);

    //Delete
    public int deleteDiary(int idx);
}
