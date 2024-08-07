import Contact from './Contact';
import { useState, useRef, useEffect } from 'react';
import classes from './Footer.module.css';
import TerminalMessage from './TerminalMessage';

export default function Footer() {

  const [leaveMessageVisible, setLeaveMessageVisible] = useState(true);
  const [contactFormVisible, setContactFormVisible] = useState(true);
  const [expandTerminal, setExpandTerminal] = useState(false);


  const terminalMessage = useRef();
  const contactForm = useRef();

  const handleHide = (ref) => {
    if (ref.current) {
      ref.current.classList.add(classes['slide-up-hidden']);

      ref.current.addEventListener('transitionend', () => {
        ref.current.style.display = 'none';
      }, { once: true }); // Ensures the listener is removed after it's called
    }
  };



  const viewportHeight = window.innerHeight;
  const vh = 80;
  const px = (vh / 100) * viewportHeight;
  const [sidebarTop, setSidebarTop] = useState(px);
  const sidebarRef = useRef(null);


  function onTerminal() {
    setExpandTerminal((prevVal) => {
      if (prevVal) {
        setSidebarTop(px);
        return false;
      }
      else {
        return true;
      }
    });
  }



  const rsMouseDownHandler = (e) => {

    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
      setLeaveMessageVisible(false);
      handleHide(terminalMessage);
      setExpandTerminal(true);
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

    <footer
      id='footer'
      ref={sidebarRef}
      onMouseDown={rsMouseDownHandler}
      style={{ top: `${sidebarTop}px` }}
      className={expandTerminal ? classes.expand : ""}
    >

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
              <a href='#' className={classes.tab}>TOP</a>

            </div>
          </div>



          <div
            className={classes['slide-up'] + ` ${!leaveMessageVisible ? classes['slide-up-hidden'] : ''}`}>
            <TerminalMessage ref={terminalMessage} />
          </div>




          <div className={classes.form + " " + classes['slide-up'] + ` ${!contactFormVisible ? classes['slide-up-hidden'] : ''}`}>
            <Contact ref={contactForm} formRef={contactForm} handleHide={handleHide} setVisible={setContactFormVisible} />
          </div>


        </div>

        <div className={classes.terminalButtons}>
          <span><i className='bx bash'></i>bash</span>
          <span><i className='plus'></i><i className='arrow-down'></i></span>
          <span><i className='trash'></i></span>

          {!expandTerminal && (<span onClick={onTerminal}><i className='arrow-up' id='expandTerminal'></i></span>)}
          {expandTerminal && (<span onClick={onTerminal}><i className='arrow-down' id='expandTerminal'></i></span>)}

          <span onClick={() => { document.getElementById("footer").style.display = "none"; }}>
            <i className='close'></i>
          </span>
        </div>
      </div>



    </footer>
  );
};
