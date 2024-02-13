import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  cardBody: {
    padding: '17px',
    border: '1px solid #ccc',
    margin:'45px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: '1.25rem',
    margin: '0 0 8px 0',
  },
  cardText: {
    margin: 0,
    color: '#666',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#F6D776',
    color: 'white', // 검은색으로 변경
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none', // 버튼이 링크로 감싸져 있을 때 텍스트에 밑줄 제거
    display: 'inline-block',
  },

};

const BoardItme = (props) => {
  const {board_id,title} = props.board;
  return (
    <div style={styles.cardBody}>
      <h5 style={styles.cardTitle}>{title}</h5>
      <p style={styles.cardText}>
      </p>
      <Link to={'/board/'+ board_id} style={styles.button}>
        상세보기
      </Link>
  
    </div>
    
  );
};



export default BoardItme;
