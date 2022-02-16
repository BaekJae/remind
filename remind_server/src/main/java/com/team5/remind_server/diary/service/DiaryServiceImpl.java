package com.team5.remind_server.diary.service;

import com.team5.remind_server.diary.domain.DiaryDTO;
import com.team5.remind_server.diary.mapper.DiaryMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class DiaryServiceImpl implements DiaryService {
    public final DiaryMapper diaryMapper;

    //Create, write
    @Override
    public int createDiary(DiaryDTO params){
        log.info("Create Diary");
        return diaryMapper.createDiary(params);
    }

    //Read
    @Override
    public DiaryDTO readDiary(int idx){
        log.info("Read Diary");
        return diaryMapper.readDiary(idx);
    }

    //Update
    @Override
    public int updateDiary(DiaryDTO params){
        log.info("Update Diary");
        return diaryMapper.updateDiary(params);
    }

    //Delete
    @Override
    public int deleteDiary(int idx){
        log.info("Delete Diary");
        return diaryMapper.deleteDiary(idx);
    }
}
