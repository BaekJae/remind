package com.team5.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team5.board.domain.BoardDTO;

@Mapper
public interface BoardMapper {

    //Search Section(R)
    public BoardDTO selectBoardDetail(int idx);

    public List <BoardDTO> selectBoardList();

    public int selectBoardTotalCount();

    //Insert Section(C)
    public int insertBoard(BoardDTO params);

    //Update Section(U)
    public int updateBoard(BoardDTO params);

    //Delete Section(D)
    public int deleteBoard(BoardDTO params);

}
