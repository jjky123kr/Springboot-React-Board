import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { useNavigate,useParams} from 'react-router-dom';

const styles = {
  writePostContainer: {
    maxWidth: '1500px',
    margin: '0 300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    height: '500px',
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
    height: '230px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#F1DEC9',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  h2: {
    padding: '20px',
  },
};

const UpdateForm = (props) => {
  const propsParam =useParams();
  const board_id = propsParam.board_id;
  const [board, setBoard] = useState({
    title: '',
    name: '',
    content: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/board/' + board_id)
      .then((res) => res.json())
      .then((res) => {
        setBoard(res);
      });
  },[board_id]);


  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const submitBoard = (e) => {
    e.preventDefault();
    console.log('updateDate',board);
    fetch('http://localhost:8080/board/' + board_id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(board),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          navigate('/board/'+board_id);
        } else {
          alert('글 수정 실패 했어요');
        }
      });
  };

  return (
    <div>
      <h2 style={styles.h2}> 당신의 소중한 반려동물 이야기를 작성해주세요</h2>
      <div style={styles.writePostContainer}>
        <form style={styles.form} onSubmit={submitBoard}>
          <label style={styles.label} htmlFor="title">
            제목
          </label>
          <input
            style={styles.input}
            type="text"
            id="title"
            name="title"
            onChange={changeValue}
            value={board.title}
          />

          <label style={styles.label} htmlFor="title">
            이름
          </label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            onChange={changeValue}
            value={board.name}
          />

          <label style={styles.label}>내용</label>
          <textarea
            style={styles.textarea}
            id="content"
            name="content"
            onChange={changeValue}
            value={board.content}
          > </textarea>

          <button style={styles.button} type="submit">
            수정완료
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateForm;
