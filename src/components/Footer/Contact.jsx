
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Contact.module.css';

export default function Contact(props) {
    const form = useRef();
    const submit = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        submit.current.value = "Sending...";

        emailjs.sendForm(
            'shahar.website',
            'shahar.website',
            form.current, {
            publicKey:
                'B2ReO4YLnvHV3iZUt',
        }).then(
            () => {
                e.target.reset();
                submit.current.value = "The message was sent.";
                submit.current.disabled = true;
                props.setVisible(false);
                props.handleHide(props.formRef);
            },
            (error) => {
                console.log('FAILED...', error.text);
                submit.current.value = "Error. try again.";
            },
        );
    };


    return (
        <form className={classes.contactForm} ref={form} onSubmit={sendEmail}>
            <span className={classes.field}>
                <label>Email:</label>
                <input type="email" name="user_email" required="required" />
            </span>
            <span className={classes.field}>
                <label>Message:</label>
                <textarea name="message" />
            </span>
            <span className={classes.submit}>
                <input ref={submit} id='submit' type="submit" value="Send" required="required" />
            </span>
        </form>
    );
};


