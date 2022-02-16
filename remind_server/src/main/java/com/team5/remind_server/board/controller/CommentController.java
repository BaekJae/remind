package com.team5.remind_server.board.controller;

import com.team5.remind_server.board.domain.CommentDTO;
import com.team5.remind_server.board.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/comment/*")
public class CommentController {

    private final CommentService commentService;

    //댓글 얻어오기
    @RequestMapping(path="/get/{id}", method=RequestMethod.GET)
    public List<CommentDTO> getComment(@PathVariable int id){
        log.info(id +"'s Comment GET");
        return commentService.getComment(id);
    }

    //댓글 개수 얻어오기
    @RequestMapping(path="/getCount/{id}", method=RequestMethod.GET)
    public int getCommentCount(@PathVariable int id){
        log.info(id + "'s Comment Count GET");
        return commentService.selectCommentTotalCount(id);
    }

    //댓글 삽입
    @RequestMapping(path="/register", method=RequestMethod.POST)
    public int insertComment(@RequestBody CommentDTO params){
        log.info("Comment register: " + params);
        return commentService.insertComment(params);
    }

    //댓글 수정
    @RequestMapping(path="/modify", method=RequestMethod.PUT)
    public int modifyComment(@RequestBody CommentDTO params){
        log.info("Comment Update: " + params);
        return commentService.updateComment(params);
    }

    //댓글 삭제
    @RequestMapping(path="/delete/{id}", method=RequestMethod.DELETE)
    public int deleteComment(@PathVariable int id){
        log.info("delete " +id+ " Comment");
        return commentService.deleteComment(id);
    }
}
