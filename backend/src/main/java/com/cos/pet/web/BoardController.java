package com.cos.pet.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.pet.Domain.Board;
import com.cos.pet.Service.BoardService;

import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
@RestController
public class BoardController {

	private final BoardService boardService;
	
	// 글 저장하기 
	@PostMapping("/board")
	public ResponseEntity<?>save(@RequestBody Board board){
		// java 1.5 이상은 new Array<> 타입을 넣지 않고 생략이 가능하다. 
		// List<Board>abc = new Array<>();
		return new ResponseEntity<>(boardService.save(board),HttpStatus.CREATED); //성공 201
	}
	
	// 글 모두 가져오기 
	@GetMapping("/board")
	public ResponseEntity<?>findAll(){
		return new ResponseEntity<>(boardService.AllList(),HttpStatus.OK); //성공 200
	}
	
	// 글 한건 가져오기
	@GetMapping("/board/{board_id}")
	public ResponseEntity<?>findbyId(@PathVariable Long board_id){
		return new ResponseEntity<>(boardService.list(board_id),HttpStatus.OK); //성공 200
	}
	// 글 수정 
	@PutMapping("/board/{board_id}")
	public ResponseEntity<?>update(@PathVariable Long board_id , @RequestBody Board board){
		return new ResponseEntity<>(boardService.put(board_id,board),HttpStatus.OK); //성공 200
	}
	
	// 글 삭제 
	@DeleteMapping("/board/{board_id}") //<?> 제네릭
	public ResponseEntity<?>deleteById(@PathVariable Long board_id, @RequestBody Board board){
		return new ResponseEntity<>(boardService.Delete(board_id),HttpStatus.OK); //성공 200
	}
	
	
}
