import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAEDCD',
    padding: '20px',
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#A4907C',
    textDecoration: 'none',
    marginLeft: '15px',
  };

  const formContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  };

  const searchInputStyle = {
    marginRight: '5px',
    padding: '8px',
    borderRadius: '20px', // Apply rounded border
    border: '1px solid #fff',
  };

  const searchButtonStyle = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '8px 15px',
    borderRadius: '20px', // Apply rounded border
    border: '1px solid #fff',
    cursor: 'pointer',
  };
  return (
    <div style={navStyle}>
      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle}>반려견 Community</Link>
        <Link to="/SaveForm" style={linkStyle}>글쓰기</Link>
      </div>

      <div style={formContainerStyle}>
        <input
          type="search"
          placeholder="Search"
          style={searchInputStyle}
        />
        <button style={searchButtonStyle}>Search</button>
      </div>

      <div style={linkContainerStyle}>
        <Link to="/loginForm" style={linkStyle}>로그인</Link>
        <Link to="/joinForm" style={linkStyle}>회원가입</Link>
      </div>
    </div>
  );
}

export default Header;
