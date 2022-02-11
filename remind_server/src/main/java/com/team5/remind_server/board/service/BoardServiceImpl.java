package com.team5.remind_server.board.service;

import com.team5.remind_server.board.domain.BoardDTO;
import com.team5.remind_server.board.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardMapper boardMapper;

    @Override
    public List<BoardDTO> getBoardList(){
        return boardMapper.selectBoardList();
    }
}
