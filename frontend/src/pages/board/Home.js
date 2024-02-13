import React, { useEffect, useState } from 'react';
import BoardItme from '../../components/BoardItme';
import Footer from '../../components/Footer';




const Home = () => {

  const[boards,setBoards] = useState([]);

  // 함수 실행시 최최 한번 실행되는 것 + 상태값이 변경 될때 마다 실행된다.
 useEffect(()=>{
fetch("http://localhost:8080/board").then(res=>res.json()).then(res=>{
  console.log(1,res);
  setBoards(res);
}); // 비동기 함수
 },[]) // 한번만 실행할 수 있게 디펜더시 를 한다. 

  return (
    <div>
      <div>
    <h2 style={{textAlign:"center"}}>당신의 소중한 반려동물 이야기를 들려주세요</h2>
     {boards.map((board)=>
     <BoardItme key={board.board_id} board={board}/>)}
    <Footer/>
    </div>
    </div>
  );
};

export default Home;