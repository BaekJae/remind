package com.team5.remind_server.board.service;

import com.team5.remind_server.board.domain.BoardDTO;

import java.util.List;

public interface BoardService {

    //Search Section(R)

    //게시글 목록 얻어오기
    public List<BoardDTO> getBoardList(int pageNum, int boardId);

    //게시글 세부사항 보기
    public BoardDTO selectBoardDetail(int idx);

    //게시글 개수 얻어오기
    public int selectBoardTotalCount(int boardId);

    //조회수 올리기
    public void increasingViews(int idx);

    //추천하기
    public int recommend(int idx);

    //Insert Section(C)

    //게시글 작성
    public int insertBoard(String userId, BoardDTO params);

    //Update Section(U)

    //게시글 업데이트
    public int updateBoard(BoardDTO params);

    //Delete Section(D)

    //게시글 삭제
    public int deleteBoard(int idx);
}
