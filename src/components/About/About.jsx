import classes from './About.module.css';


export default function About() {


    return (
        <>
            <p className={classes.slashes}>//</p>

            <section tabIndex="0" id='about' className={classes.about_section}>

                <div className={classes.content}>
                    <p>Hello there, welcome to my corner of the internet! I'm Shahar, a graduate of Computer Science,</p>
                    <p>a software engineer by day, and an enthusiast of trips, music, and gadgets all the time!</p>
                    <p>I have always been interested and intrigued by computers and technology. Since I can remember, I've known what I wanted to do.</p>
                    <p>I love coding, creating, math, and playing piano.</p>
                </div>

                <div className={classes.content}>
                    <p>Feel free to poke around my <a href='https://github.com/shahar-shemesh' target='_blank'>GitHub</a>, contact me for a chat at <a href='mailto:shahar@usa.com'>shahar@usa.com</a>, or connect on <a href='https://linkedin.com/in/shaharshemesh' target='_blank'>LinkedIn</a>.</p>
                    <p>Always looking to make new friends and meet new people!</p>
                </div>

            </section>
        </>

    );
};


