package com.team5.remind_server.settings.service;

import com.team5.remind_server.board.domain.CommentDTO;
import com.team5.remind_server.board.mapper.CommentMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor

public class SettingsServiceImpl implements SettingsService {

    private final CommentMapper commentMapper;

}
