import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '800px',
    height:'500px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  author: {
    color: '#666',
    marginBottom: '15px',
  },
  content: {
    lineHeight: '1.6',
  },

 button: {
  padding: '18px 15px',
  backgroundColor: '#FAEDCD',
  color: '#A4907C',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '20px auto',
  width: '100px',
  height: '50px',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  marginRight: '20px',

},

   buttonContainer: {
    marginTop: '20px', // 버튼과 내용 사이의 간격 조절
    textAlign: 'center',
    marginRight:''
  
    
 

    
  },


};

const Detail = (props) => {
 
  const propsParam =useParams();
  const board_id = propsParam.board_id

  const [board, setBoard] = useState({
    id: "",
    title: "",
    name: "",
    content: "",
  });

  useEffect(() => {
    fetch('http://localhost:8080/board/'+board_id)
      .then((res) => res.json())
      .then((res) => {
        console.log("Received board data:", res);
        setBoard(res);
      })
      .catch((error) => {
        console.error("Error fetching board data:", error);
      });
  }, [board_id]);

// 삭제 

const navigate = useNavigate(); // useNavigate 훅 사용
const deleteBoard =()=>{
  
  fetch('http://localhost:8080/board/'+board_id,{
    method: 'DELETE',
  })
  .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          navigate('/');
        } else {
          alert('삭제실패');
        }
      });
  };
const updateBoard =()=>{
  navigate('/updateForm/'+board_id);
}

return (
    <div>     
    <div style={styles.container}>
      <h1 style={styles.title}>{board.title}</h1>
      <hr/>
      <p style={styles.author}>Author: {board.name}</p>
      <div style={styles.content}>{board.content}</div>      
      </div>     
      <div style={styles.buttonContainer}>
       <button style={styles.button} onClick={updateBoard} >수정하기</button>
       <button style={styles.button} onClick={deleteBoard} >삭제하기</button>
       
      </div>
    <Footer/>
  </div>
  
  );
};

export default Detail;
