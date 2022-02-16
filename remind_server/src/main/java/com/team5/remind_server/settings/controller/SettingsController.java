package com.team5.remind_server.settings.controller;

import com.team5.remind_server.board.service.BoardService;
import com.team5.remind_server.diary.domain.SettingsDTO;
import com.team5.remind_server.diary.service.SettingsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/settings/*")
public class SettingsController {

    private final SettingsService settingsService;

    //즐겨찾는 게시판 삭제
    @RequestMapping(path="/delete/{id}", method = RequestMethod.DELETE)
    public int deleteStar(@PathVariable int id){
        log.info("Trying to delete note has " + id + " starId");
        return settingsService.deleteStar(id);
    }

    //좋아하는 글 삭제
    @RequestMapping(path="/delete/{id}", method = RequestMethod.DELETE)
    public int deleteHeart(@PathVariable int id){
        log.info("Trying to delete note has " + id + " heartId");
        return settingsService.deleteHeart(id);
    }

}
