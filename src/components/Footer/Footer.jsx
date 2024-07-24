import classes from './Footer.module.css';
import Contact from './Contact';
import { useState, useRef } from 'react';

export default function Footer() {

  // const [size, setSize] = useState(85);
  const [size, setSize] = useState(85);


  const time = new Date().toLocaleTimeString();
  const fullPath = window.location.hostname;

  function expendTerminal() {
    let footer = document.getElementById("footer");
    let arrow = document.getElementById("expendTerminal");
    switch (arrow.className) {
      case "arrow-up":
        footer.className += classes.expend;
        arrow.className = "arrow-down";
        break;

      case "arrow-down":
        footer.className = "";
        footer.attributeStyleMap.clear();
        arrow.className = "arrow-up";
        break;
    }
  }

  const viewportHeight = window.innerHeight;
  const vh = 85; // Example vh value
  const px = (vh / 100) * viewportHeight;
  const [sidebarTop, setSidebarTop] = useState(px);
  const sidebarRef = useRef(null);

  const rsMouseDownHandler = (e) => {
    e.preventDefault();
    const y = e.clientY;
    const sbTop = window.getComputedStyle(sidebarRef.current).top;
    const initialTop = parseInt(sbTop, 10);

    const mouseMoveHandler = (e) => {
      const dy = e.clientY - y; // Move vertically
      const newTop = initialTop + dy;

      if (newTop >= 10 && newTop <= viewportHeight-10) { // Adjust to your needs, e.g., preventing negative top values
        setSidebarTop(newTop);
      }
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  return (

    <footer id='footer' ref={sidebarRef} onMouseDown={rsMouseDownHandler} style={{ top: `${sidebarTop}px` }}>
      <div
        className={classes.resizer}
        style={{ cursor: 'ns-resize' }}></div>


      <div className={classes.footerContent} >


        <div className={classes.footerNav}>
          <div className={classes.tabs}>
            <a className={classes.tab + " " + classes.active}>LEAVE A MESSAGE</a>

            <a className={classes.tab}>COPYRIGHTS</a>

            <a className={classes.tab}>PLATFORMS</a>

            <a className={classes.tab}>TOP</a>
          </div>


          <div className={classes.terminalButtons}>
            <span>
              <i class='bx bash'></i>bash
            </span>

            <span>
              <i class='plus'></i>
              <i class='arrow-down'></i>
            </span>


            <span>
              <i class='trash'></i>
            </span>

            <span onClick={expendTerminal}>
              <i class='arrow-up' id='expendTerminal' value="0"></i>
            </span>

            <span onClick={() => { document.getElementById("footer").style.display = "none"; }}>
              <i class='close'></i>
            </span>


          </div>
        </div>


        <div className={classes.leaveMessage}>
          <p className={classes.currentTime}>{time}</p>
          <p className={classes.name}>[shahar]</p>
          <p className={classes.message}>leave a message</p>
          <p className={classes.path}>/{fullPath}</p>
          <p className={classes.fileUpdated}>(x27)</p>
        </div>





      </div>
    </footer>
  );
};
