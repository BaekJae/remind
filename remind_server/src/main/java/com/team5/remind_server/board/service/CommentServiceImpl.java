package com.team5.remind_server.board.service;

import com.team5.remind_server.board.domain.CommentDTO;
import com.team5.remind_server.board.service.CommentService;
import com.team5.remind_server.board.mapper.CommentMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor

public class CommentServiceImpl implements CommentService{

    private final CommentMapper commentMapper;

    //댓글 얻어오기(R)
    @Override
    public List<CommentDTO> getComment(int id){
        log.info("GET " + id + "'s comment");
        return commentMapper.getComment(id);
    }

    //댓글 개수 얻어오기
    @Override
    public int selectCommentTotalCount(int id){
        log.info("GET " + id +"'s comment counts");
        return commentMapper.selectCommentTotalCount(id);
    }

    //댓글 삽입하기(C)
    @Override
    public int insertComment(CommentDTO params){
        log.info("Insert Comment: " + params);
        return commentMapper.insertComment(params);
    }

    //댓글 수정하기(U)
    @Override
    public int updateComment(CommentDTO params){
        log.info("Update Comment: " + params);
        return commentMapper.updateComment(params);
    }

    //댓글 삭제하기(D)
    @Override
    public int deleteComment(int id){
        log.info("Delete Comment: id="+id);
        return commentMapper.deleteComment(id);
    }
}
