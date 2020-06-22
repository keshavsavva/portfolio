import React, { Component } from 'react'
import "../../styles/output.css"
export class Contact extends Component {
    render() {
        return (
            <section class="container main-container">
                <h1>Contact</h1>
                
                <form>
                    <label for="name">Name:</label>
                    <br />
                    <input class="form-control" type="text" name="name" placeholder="John Smith" style={ {width: "100%"} }></input>
                    <br />
                    <label for="email">Email:</label>
                    <br />
                    <input class="form-control" type="email" name="email" placeholder="example@gmail.com" style={ {width: "100%"} }></input>
                    <br />
                    <label for="message">Message:</label>
                    <br />
                    <textarea class="form-control" name="message" style={ {width: "100%", height: "300px" } } ></textarea>
                    <br />
                    <button>Submit</button>
                </form>
            </section>
        )
    }
}

export default Contact
