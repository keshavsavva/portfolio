import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className = "container main-container">
                <div class="row">
                        <div class="col-md-12">
                            <h1>About Me</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <img class="mainPic" alt="mainPic" src="Assets/Images/headshot.jpg" />
                            <p>My name is Keshav Avva and I am from Greensboro, NC.  I just recently graduated from North Carolina State University with a degree in Mechanical Engineering with a minor in Environmental Science.  Since then however, I have been persuing a new career in Full Stack Development.  I am very excited to dive into the world of Web Development and cannot wait to learn more advanced skills. In fact, this page that your reading now is one of my first web development projects!</p>
                            <p>Besides my interests in Web Development, I also have a few fun hobbies! I enjoy playing and listening to music.  I have played guitar for the past couple of years and love learning rock and alternative music.  I may not be the most technically advance musician, but I sure do like noodling on the axe! Besides playing, I also love listening to a variety of genres, including Rock, Alternative, Rap, Electronic, and even Jazz from time to time! </p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home
