package com.team5.remind_server.board.service;

import com.team5.remind_server.board.domain.BoardDTO;

import java.util.List;

public interface BoardService {
    public List<BoardDTO> getBoardList();
}
