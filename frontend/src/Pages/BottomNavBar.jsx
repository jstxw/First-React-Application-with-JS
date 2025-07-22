import React, { useEffect, useState } from "react";

const iconStyle = {
  fontSize: '2rem',
  margin: '0 1rem',
  filter: 'brightness(0) invert(1)',
  verticalAlign: 'middle',
};

const barStyle = {
  background: '#0a2342',
  padding: '1.2rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  height: '20px',
  width: '100%',
};

const BottomNavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // If user is at the bottom (within 10px)
      if (windowHeight + scrollY >= docHeight - 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Check on mount in case already at bottom
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div style={barStyle}>
      <span style={iconStyle}>✉️</span>
      <span style={iconStyle}>📸</span>
      <span style={iconStyle}>🎵</span>
      <span style={iconStyle}>𝕏</span>
      <span style={iconStyle}>🎮</span>
      <span style={iconStyle}>💼</span>
      <span style={iconStyle}>👽</span>
      <span style={iconStyle}>▶️</span>
    </div>
  );
};

export default BottomNavBar; 