
import classes from './Navigation.module.css';


export default function Navigation() {


  return (
    <nav tabIndex="0" id='navigation'>
      <ul className={classes.nav_links}>
        <li className={classes.nav_item}>about me</li>
        <li className={classes.nav_item}>portfolio</li>
        <li className={classes.nav_item}>contact</li>
      </ul>
    </nav>
  );
};


