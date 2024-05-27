import { useEffect } from "react";

import classes from './Portfolio.module.css';
import Card from './Card/Card.jsx';
import DATA from '../../data/index.json';

export default function Portfolio() {

  useEffect(() => {
    const items = document.querySelectorAll('#card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      rootMargin: '0% 0% -10% 0%',
      threshold: 0.5 // Adjust this value as needed
    });

    items.forEach(item => {
      observer.observe(item);
    });


  }, []);



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


