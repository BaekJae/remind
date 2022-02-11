package com.team5.remind_server.board.controller;

import com.team5.remind_server.board.domain.BoardDTO;
import com.team5.remind_server.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;

    @RequestMapping(path="/list", method=RequestMethod.GET)
    public List<BoardDTO> getBoard(){
        log.info("boardList in");
        return boardService.getBoardList();
    }
}
