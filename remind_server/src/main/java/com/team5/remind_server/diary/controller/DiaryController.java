package com.team5.remind_server.diary.controller;

import com.team5.remind_server.diary.domain.DiaryDTO;
import com.team5.remind_server.diary.service.DiaryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;


@RestController //controller annotation in restful api
@Log4j2  //로깅 프레임워크
@RequiredArgsConstructor  //어노테이션은 final이나 @NonNull인 필드 값만 파라미터로 받는 생성자를 만듬
@RequestMapping("/diary/*")
public class DiaryController{
    private final DiaryService diaryService; //final 재할당 할 수 없다

    //게시글 작성
    @RequestMapping(path="/post", method = RequestMethod.POST)
    public int writeDiary(@RequestBody DiaryDTO diaryDTO){
        log.info("register DTO: " + diaryDTO);
        return diaryService.createDiary(diaryDTO);
    }

    //게시글 삭제
    @RequestMapping(path="/delete/{id}", method = RequestMethod.DELETE)
    public int deleteDiary(@PathVariable int id){
        log.info("Trying to delete note has " + id + " diaryId");
        return diaryService.deleteDiary(id);
    }

    //게시글 R
    @RequestMapping(path="/read/{id}", method = RequestMethod.GET)
    public DiaryDTO readDiary(@PathVariable int id){
        log.info("read Diary ");
        return diaryService.readDiary(id);
    }

    //게시글 수정
    @RequestMapping(path="/update/{id}", method = RequestMethod.GET)
    public DiaryDTO updateDiary(@PathVariable int id){
        log.info("Getting DTO(Before Update): ");
        return diaryService.readDiary(id);
    }

    @RequestMapping(path="/update", method = RequestMethod.PUT)
    public int updateDiary(@RequestBody DiaryDTO diaryDTO){
        log.info("update DTO: " + diaryDTO);
        return diaryService.updateDiary(diaryDTO);
    }

}







//import com.team5.remind_server.diary.entity.DiaryEntity;
//import com.team5.remind_server.diary.service.DiaryService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.log4j.Log4j2;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@Log4j2
//@RequiredArgsConstructor
//@RequestMapping("/diary")
//public class DiaryController {
//    @Autowired
//    private DiaryService diaryService;
//
//    @RequestMapping(value = "/", method = RequestMethod.GET)// calendar
//    public String calendar(){
//        //calender
//        return "calendar.html";//temp html
//    }
//
//    //@RequestMapping(value = "/post", method = RequestMethod.POST)
//    @PostMapping("/post")
//    public DiaryEntity writeDiary(@RequestBody DiaryEntity diaryEntity){ // write diary
//        return diaryService.createDiary(diaryEntity);
//    }
//
//}
