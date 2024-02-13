import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const styles = {
  writePostContainer: {
    maxWidth: '1500px', // 수정: 폼의 최대 너비를 800px로 변경
    margin: '0 300px', // 수정: 가운데 정렬을 위해 margin을 수정
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    height:'500px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height:'230px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#F1DEC9',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },

};

const SaveForm = (props) => {
  const [board, setBoard] = useState({
    title: '',
    name: '',
    content: '',
  });

  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate(); // useNavigate 훅 사용

  const submitBoard = (e) => {
    e.preventDefault(); // submit이 action을 타지 않는다.
    fetch('http://localhost:8080/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(board),
    })
      .then((res) => {
        console.log(1,res);
        if(res.status === 201){ // 201이면 리턴하고,
          return  res.json()
        }else{                 // 201이 아니면 리턴 x
          return null;
        }
      
      })
      .then((res) => {
        if(res!== null){
          navigate('/');
        }else{
          alert('글 등록 실패 했어요')
        }
         
      });
  };


  return (
    <div>
   <h2 style={{textAlign:'center',marginTop:'50px',marginBottom:'50px'}}> 당신의 소중한 반려동물 이야기를 작성해주세요</h2>
    <div style={styles.writePostContainer}>    
      <form style={styles.form} onSubmit={submitBoard}>
        <label style={styles.label} htmlFor="title">
          제목
        </label>
        <input style={styles.input} type="text" id="title" name="title"  onChange={changeValue}/>
   
        <label style={styles.label} htmlFor="title">
          이름
        </label>
        <input style={styles.input} type="text" id="name" name="name" onChange={changeValue}/>
        
        
        <label style={styles.label}>내용</label>
        <textarea style={styles.textarea} id="content" name="content"onChange={changeValue}></textarea>

        <button style={styles.button} type="submit">
          글 작성 완료
        </button>
      </form>
      </div>
      <Footer/>
    </div>
  );
};

export default SaveForm;
