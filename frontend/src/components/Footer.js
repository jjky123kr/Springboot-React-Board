import React from 'react';

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: '#EEE9DA',
      color: '#27374D',
      padding: '20px',
      textAlign: 'center',
      marginTop: '100px', // Footer의 상단 여백을 추가
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10px',
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contactInfo}>
        <div>
          <p>
            이메일: example@example.com
          </p>
          <p>전화번호: 123-456-7890</p>
        </div>
      </div>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
