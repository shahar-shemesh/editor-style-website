import Contact from './Contact';
import { useState, useRef, useEffect } from 'react';
import classes from './Footer.module.css';
import TerminalMessage from './TerminalMessage';

export default function Footer() {

  const [leaveMessageVisible, setLeaveMessageVisible] = useState(true);
  const [contactFormVisible, setContactFormVisible] = useState(true);

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



  const terminalMessage = useRef(null);
  const contactForm = useRef(null);

  const handleHide = (ref) => {
    if (ref.current) {
      ref.current.classList.add(classes['slide-up-hidden']);

      ref.current.addEventListener('transitionend', () => {
        ref.current.style.display = 'none';
      }, { once: true }); // Ensures the listener is removed after it's called
    }
  };




  const viewportHeight = window.innerHeight;
  const vh = 85;
  const px = (vh / 100) * viewportHeight;
  const [sidebarTop, setSidebarTop] = useState(px);
  const sidebarRef = useRef(null);

  const rsMouseDownHandler = (e) => {

    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
      setLeaveMessageVisible(false);
      handleHide(terminalMessage);
    }

    else {
      e.preventDefault();
      const y = e.clientY;
      const sbTop = window.getComputedStyle(sidebarRef.current).top;
      const initialTop = parseInt(sbTop, 10);

      const mouseMoveHandler = (e) => {
        const dy = e.clientY - y;
        const newTop = initialTop + dy;

        if (newTop >= 10 && newTop <= viewportHeight - 10) {
          setSidebarTop(newTop);
        }
      };

      const mouseUpHandler = () => {
        document.removeEventListener('mouseup', mouseUpHandler);
        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    }
  };

  return (

    <footer id='footer' ref={sidebarRef} onMouseDown={rsMouseDownHandler} style={{ top: `${sidebarTop}px` }}>

      <div className={classes.resizer} style={{ cursor: 'ns-resize' }}>
        <span className={classes.resizeAlert}><i className={`resize`}></i></span>
      </div>

      <div className={classes.container}>
        <div className={classes.footerContent} >
          <div className={classes.footerNav}>
            <div className={classes.tabs}>
              <a className={classes.tab + " " + classes.active}>LEAVE A MESSAGE</a>
              <a className={classes.tab}>COPYRIGHTS</a>
              <a className={classes.tab}>PLATFORMS</a>
              <a className={classes.tab}>TOP</a>

            </div>
          </div>



          <span
            className={classes['slide-up'] + ` ${!leaveMessageVisible ? classes['slide-up-hidden'] : ''}`}>
            <TerminalMessage ref={terminalMessage} />
          </span>




          <div className={classes.form + " " + classes['slide-up'] + ` ${!contactFormVisible ? classes['slide-up-hidden'] : ''}`}>
            <Contact ref={contactForm} formRef={contactForm} handleHide={handleHide} setVisible={setContactFormVisible} />
          </div>


        </div>

        <div className={classes.terminalButtons}>
          <span><i className='bx bash'></i>bash</span>
          <span><i className='plus'></i><i className='arrow-down'></i></span>
          <span><i className='trash'></i></span>
          <span onClick={expendTerminal}><i className='arrow-up' id='expendTerminal' value="0"></i></span>
          <span onClick={() => { document.getElementById("footer").style.display = "none"; }}>
            <i className='close'></i>
          </span>
        </div>
      </div>



    </footer>
  );
};
