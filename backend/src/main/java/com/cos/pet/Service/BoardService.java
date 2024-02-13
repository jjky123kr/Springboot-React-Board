package com.cos.pet.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.pet.Domain.Board;
import com.cos.pet.Domain.BoardRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BoardService {

  private final BoardRepository boardRepository;

  // 게시판 글 저장
  @Transactional
  public Board save(Board board) {
    return boardRepository.save(board);
  }
  // 게시판 글 가져오기
  // .orElseThrow 사용하는 이유?
  // 만약에 id 값을 못 찾을 경우를 위해서 인셉션 처리가 있어야 한다.
  // 람다식으로 하면 타입을 몰라도 된다

  @Transactional(readOnly = true) // JPA 변경감지라는 내부 기능 활성화 x,
  // updata시의 정합성을 유지해주고,insert의 유령데이터 현상(팬텀현상)못막음
  public Board list(Long board_id) {
    return boardRepository.findById(board_id).orElseThrow(() -> new IllegalArgumentException("id를 확인해주세요"));
  }

  // 게시판 글 모든목록
  public List<Board> AllList() {
    return boardRepository.findAll();
  }

  // 게시판 수정
  // 트랜잭션을 해야한다.
  @Transactional
  public Board put(Long board_id, Board board) {

    Board boardEntity = boardRepository.findById(board_id)
        .orElseThrow(() -> new IllegalArgumentException("id를 확인해주세요"));
    boardEntity.setTitle(board.getTitle()); // 데이터 영속화
    boardEntity.setName(board.getName());
    return boardEntity;
  }

  // 게시판 삭제
  public String Delete(Long board_id) {
    boardRepository.deleteById(board_id);
    return "ok";
  }

}
