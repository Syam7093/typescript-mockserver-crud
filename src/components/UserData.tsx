import React, { useContext, useState } from 'react';
import { usesContext } from '../App';

const UserData = () => {
  const [main, setmain] = useState('PRAVEEN---');
  const { one, setone } = useContext(usesContext);

  return (
    <div>
      <div style={{ backgroundColor: 'green', overflow: 'hidden' }}>
        <h1 style={styles.movingText}>syam</h1>
      </div>
    </div>
  );
};

const styles = {
  movingText: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    position: 'relative' as 'relative',
    animation: 'move 20s linear infinite',
  },
};

// Adding the keyframes in global styles
const styleSheet = document.styleSheets[1];
const keyframes =
  `@keyframes move {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default UserData;
