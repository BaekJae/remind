package com.team5.remind_server.board.mapper;

import java.util.List;

import com.team5.remind_server.board.domain.CommentDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentMapper {
    //댓글 얻어오기(R)
    public List<CommentDTO> getComment(int id);

    //댓글 개수 얻어오기
    public int selectCommentTotalCount(int id);

    //댓글 삽입하기(C)
    public int insertComment(CommentDTO params);

    //댓글 수정하기(U)
    public int updateComment(CommentDTO params);

    //댓글 삭제하기(D)
    public int deleteComment(int id);
}
