import React, { Suspense, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import SuspenseImage from './components/SuspenseImage';
import ShareDemo from './share';

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
        <ShareDemo></ShareDemo>
      <Suspense fallback={<div style={{color:"#ff5121"}}>loading</div>}>
        <SuspenseImage src="https://oss-public.fangdd.com/test/xf/ddxf/FmWLCgYKfghtrxVsLU0dk9di0Pwd.jpg-png2000"></SuspenseImage>
      </Suspense>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Modal visible={visible} onClose={handleClick}><div className={styles.content} onClick={()=>{
          console.log(99911121212);
          alert(912121219)
          window.location.href="weixin://"+encodeURIComponent(`dl/chat`);
        }}>hello world</div></Modal> */}
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
