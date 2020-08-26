import React from 'react'
import './App.css'


export default function Contact() {
    return (
        <div>
            <h2>Contact Me</h2>
            <form className="formBox">
                <div className="form">
                <input type="text" name="name" placeholder="Type here your name..."/><br/>
                <input type="text" name="email" placeholder="Type here your email..."/><br/>
                <input type="text" name="message" placeholder="Type here your message..."/><br/><br/>
                <input type="submit"/>
                </div>

            </form>
        </div>
    )
}
