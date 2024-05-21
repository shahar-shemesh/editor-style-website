
import classes from './Card.module.css';

export default function Card({ item }) {

    return (
        <div className={classes.card}>

            <div className={classes.image}>
                <img src={item.src} />
            </div>

            <div className={classes.cardContent}>
                <p className={classes.name}>
                    Customer: <span className={classes.fields}>{item.title}</span>
                </p>
                <p className={classes.technologics}>
                    Technologics: <span className={classes.fields}>{item.title}</span>
                </p>
                {/* <p className={classes.description}>
                    Description: <span className={classes.fields}>{item.description}</span>
                </p> */}
                <p className={classes.link}>
                    Link: <span className={classes.fields}>
                        <a target='_blank' href={"https://" + item.link} className={classes.aLink}>{item.link}</a>
                    </span>
                </p>
            </div>

        </div>
    );
};


