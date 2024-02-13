package com.cos.pet.web;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.web.servlet.MockMvc;

import lombok.extern.slf4j.Slf4j;

/**
 * 통합 테스트(모든 Bean들을 똑같이 IoC올리고 테스트하는 것)
 * WebEnvironment.MOCK =실제 톰켓을 올리는 것이 아니라, 다른 톰켓으로 테스트
 * WebEnvironment.RANDOM_PORT = 실제 톰겟으로 테스트 진행
 * @AutoConfigureMockMvc MockMvc를 IOC를 등록해줌
 * @Transactional 은 각각의 테스트함수가 종료될 때마다, 트랙잭션을 rollback해줌
 * 
*/

@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
public class BoardControllerIntegreTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void save_테스트() {
	
	}
}
