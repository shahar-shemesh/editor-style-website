
import classes from './Skills.module.css';
import DATA from '../../data/index.json';


export default function Skills() {


  return (
    <section tabIndex="0" className={classes.skills}>

      <ul className={classes.skillList}>

        {DATA?.skills?.map((item, index) => (

          <div key={index} className={classes.skillCard}>

            <p className={classes.subject}>.{item.title}</p>

            <ul className={classes.stack}>
              {item?.stack?.map((skill) => (
                <li key={skill} className={classes.skillItem}>
                  <i className={`${classes.icon} bx bxl-${skill.toLowerCase()} bx-sm`}></i>
                  <p className={classes.skillName}>{skill}</p>
                </li>
              ))}
            </ul>

          </div>

        ))}
      
      </ul>

    </section>
  );
};


