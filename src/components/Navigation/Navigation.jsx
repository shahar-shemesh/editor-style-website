
import classes from './Navigation.module.css';


export default function Navigation() {


  return (
    <nav tabIndex="0" id='navigation'>
      <ul className={classes.nav_links}>

      <li className={classes.nav_item}>
          <a href="#about" className="navLink">about me</a>
        </li>

        <li className={classes.nav_item}>
          <a href="#portfolio" className="navLink">portfolio</a>
        </li>

        <li className={classes.nav_item}>
          <a target='_blank' href="mailto:shahar@usa.com" className="navLink">contact</a>
        </li>

      </ul>
    </nav>
  );
};


