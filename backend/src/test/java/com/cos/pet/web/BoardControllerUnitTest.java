package com.cos.pet.web;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.cos.pet.Domain.Board;
import com.cos.pet.Service.BoardService;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

// 단위 테스트 (Controller,Filter,ControllerAdvice)
@Slf4j
@WebMvcTest
public class BoardControllerUnitTest {

  @Autowired
  private MockMvc mockMvc;

  // 단위 테스트 환경에서는 BoardService 가 가짜로 등록이 된다.
  // 그래서 Ioc 환경에서 Ioc MockBean을 등록을 한다.
  @MockBean // Ioc 환경에 bean에 등록이 된다.
  private BoardService boardService;

  // BDDMockito 패턴 give , when, then
  @Test
  public void save_test() throws Exception {

    // given 테스트하기위한 준비단계 (json으로 변경 하여 결과 값을 return )
    Board board = new Board(null, "글작성 등록 테스트", "cos", "글작성");
    String content = new ObjectMapper().writeValueAsString(board); // json 으로 변경
    when(boardService.save(board)).thenReturn(new Board(null, "글작성 등록 테스트", "cos", "글작성"));

    // when (테스트 실행 단계)
    ResultActions resultActions = mockMvc.perform(post("/board")
        .contentType(MediaType.APPLICATION_JSON_UTF8)
        .content(content)
        .accept(MediaType.APPLICATION_JSON_UTF8));
    // then(검증)
    resultActions
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.title").value("글작성 등록 테스트"))
        .andDo(MockMvcResultHandlers.print());
  }
}
