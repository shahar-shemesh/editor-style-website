import { useState, useEffect, useRef  } from 'react';
import classes from './Footer.module.css';


export default function TerminalMessage({ }) {

    const time = new Date().toLocaleTimeString();
    const fullPath = window.location.hostname;
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
      const storedCount = localStorage.getItem("visitCount");
      const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
      const newCount = currentCount + 1;
      setVisitCount(newCount);
      localStorage.setItem("visitCount", newCount.toString());
    }, []);


    return (<div id='leaveMessage' className={classes.leaveMessage} >
        <p className={classes.currentTime}>{time}</p>
        <p className={classes.name}>[shahar]</p>
        <p className={classes.message}>leave a message</p>
        <p className={classes.path}>/{fullPath}</p>
        <p className={classes.fileUpdated}>(x{visitCount})</p>
    </div>);
};


