
import classes from './Portfolio.module.css';
import Card from './Card/Card.jsx';
import DATA from '../../data/index.json';

export default function Portfolio() {


  return (
    <section tabIndex="0" id="portfolio" className={classes.portfolio}>
      <ul className={classes.projectList}>
        {DATA?.portfolio?.map((project, index) =>
          <Card key={index} item={project} />
        )}
      </ul>
    </section>
  );
};


