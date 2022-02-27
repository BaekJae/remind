package com.team5.remind_server.board.controller;

import com.team5.remind_server.board.domain.BoardDTO;
import com.team5.remind_server.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/board/*")
public class BoardController {

    private final BoardService boardService;

    //검색 영역
    @RequestMapping(path="/list", method=RequestMethod.GET)
    public List<BoardDTO> getBoard(@RequestParam("pageNum") int pageNum, @RequestParam("boardId") int boardId){
        log.info("boardList in");
        return boardService.getBoardList(pageNum,boardId);
    }

    @RequestMapping(path="/detail/{id}", method = RequestMethod.GET)
    public BoardDTO getNoteDetail(@PathVariable int id){
        log.info("NoteDetail in");
        boardService.increasingViews(id);
        return boardService.selectBoardDetail(id);
    }

    @RequestMapping(path="/count/{boardId}", method = RequestMethod.GET)
    public int getNoteCount(@PathVariable int boardId){
        log.info("Count in");
        return boardService.selectBoardTotalCount(boardId);
    }

    @RequestMapping(path="/recommend/{id}")
    public int recommend(@PathVariable int id){
        log.info("recommend in");
        return boardService.recommend(id);
    }
    //게시글 작성
    @RequestMapping(path="/register", method = RequestMethod.POST)
    public int insertNotes(@AuthenticationPrincipal String userId, @RequestBody BoardDTO board){
        log.info("register DTO: " + board);
        return boardService.insertBoard(userId, board);
    }

    //게시글 삭제
    @RequestMapping(path="/delete/{id}", method = RequestMethod.DELETE)
    public int deleteNotes(@AuthenticationPrincipal String userId, @PathVariable int id){
        log.info("Trying to delete note has " + id + " noteId");
        return boardService.deleteBoard(id);
    }

    //게시글 수정
    @RequestMapping(path="/update/{id}", method = RequestMethod.GET)
    public BoardDTO updateNotes(@PathVariable int id){
        log.info("Getting DTO(Before Update): ");
        return boardService.selectBoardDetail(id);
    }

    //게시글 수정
    @RequestMapping(path="/update", method = RequestMethod.PUT)
    public int updateNotes(@AuthenticationPrincipal String userId, @RequestBody BoardDTO board) throws Exception{
        log.info("update DTO: " + board);
        return boardService.updateBoard(board);
    }
}
