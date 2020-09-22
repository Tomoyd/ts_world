import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

import styles from './test.less';
// import * as funs from './treeShaking';

function App() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Modal visible={visible} onClose={handleClick}><div className={styles.content}>hello world</div></Modal>
        <p onClick={handleClick} className={styles.red}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
