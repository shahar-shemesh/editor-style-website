
import myEmojy from '/img/about-me.png';

import classes from './Header.module.css';


export default function Header() {


  return (
    <header id='header'>

      <div className={classes.logo}>

        <div className={classes.emojy}>
          <img src={myEmojy} alt='shahar shemesh' />
        </div>

        <div className={classes.content}>
          <a href="/" className={classes.myname}>shahar_shemesh</a>
          <div className={classes.mytitle}>Full Stack developer</div>
        </div>

      </div>


      <div className={classes.contactButtons}>
        <i className='bx bx-md bx-envelope'></i>
        <i className='bx bx-md bxl-linkedin-square' ></i>
        <i className='bx bx-md bxl-github' ></i>
      </div>


    </header>
  );
};