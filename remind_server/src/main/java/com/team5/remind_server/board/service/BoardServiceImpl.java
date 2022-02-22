package com.team5.remind_server.board.service;

import com.team5.remind_server.board.domain.BoardDTO;
import com.team5.remind_server.board.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardMapper boardMapper;

    //Select

    @Override
    public List<BoardDTO> getBoardList(int pageNum){
        log.info("Board List GET");
        int requestPageNum = 8 * (pageNum-1);
        return boardMapper.selectBoardList(requestPageNum);
    }

    @Override
    public BoardDTO selectBoardDetail(int idx){
        log.info("Note Detail GET");
        return boardMapper.selectBoardDetail(idx);
    }

    @Override
    public int selectBoardTotalCount(){
        log.info("Board Count GET");
        return boardMapper.selectBoardTotalCount();
    }

    @Override
    public void increasingViews(int idx){
        log.info("Increasing Views");
        boardMapper.increasingViews(idx);
    }

    @Override
    public int recommend(int idx){
        log.info("recommend function");
        return boardMapper.recommend(idx);
    }

    //Insert
    @Override
    public int insertBoard(String userId, BoardDTO params){
        log.info("Insert notes");
        params.setNoteWriter(userId);
        return boardMapper.insertBoard(params);
    }

    //Update
    @Override
    public int updateBoard(BoardDTO params){
        log.info("Update Notes");
        return boardMapper.updateBoard(params);
    }

    //Delete
    @Override
    public int deleteBoard(int idx){
        log.info("Delete Notes");
        return boardMapper.deleteBoard(idx);
    }


}
