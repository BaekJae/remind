package com.team5.remind_server.board.mapper;

import java.util.List;

import com.team5.remind_server.board.domain.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {

    //Search Section(R)
    public BoardDTO selectBoardDetail(int idx);

    public List <BoardDTO> selectBoardList();

    public int selectBoardTotalCount();

    public void increasingViews(int idx);

    public int recommend(int idx);

    //Insert Section(C)
    public int insertBoard(BoardDTO params);

    //Update Section(U)
    public int updateBoard(BoardDTO params);

    //Delete Section(D)
    public int deleteBoard(int idx);

}
