import React, { Component } from 'react'
import axios from "axios";

class ContactForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios.post("http://localhost:5007/send", {
            name,
            email,
            message
        })
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err.response) })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (

            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" id="email" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" autoComplete="off"></textarea>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default ContactForm;