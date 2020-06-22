import React, { Component } from 'react'
import "../../styles/output.css"
import headshot from './img/headshot.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import node from "./img/node.png";
import mongodb from "./img/mongo.png";
import sass from "./img/sass.png";
import materialui from "./img/materialui.png";
import heroku from "./img/heroku.png";
export class Home extends Component {
    render() {
        return (
            <div className = "container main-container">
                <div class="row">
                        <div class="col-md-12">
                            <h1>Keshav Avva</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <h5>
                                <EmailIcon />
                                  keshav.s.avva@gmail.com
                                <a href="https://www.linkedin.com/in/keshav-a-a2871393/">
                                    <LinkedInIcon className="icon1" fontSize="large"/>
                                </a>
                                <a href="https://drive.google.com/file/d/1M4bGbBCHaYMBLEJKsjOUE141o7zDqJ_i/view?usp=sharing">
                                    <DescriptionIcon className="icon1" fontSize="large"/>
                                </a>
                                <a href="https://github.com/keshavsavva">
                                    <GitHubIcon className="icon1" fontSize="large"/>
                                </a>
                            </h5>
                            
                            <br></br>
                            <img class="mainPic" alt="mainPic" src={headshot} />
                            <p>My name is Keshav Avva and I am from Greensboro, NC.  I just recently graduated from North Carolina State University with a degree in Mechanical Engineering with a minor in Environmental Science.  Since then however, I have been persuing a new career in Full Stack Development.  I am very excited to dive into the world of Web Development and cannot wait to learn more advanced skills. In fact, this page that your reading now is one of my first web development projects!</p>
                            <p>Besides my interests in Web Development, I also have a few fun hobbies! I enjoy playing and listening to music.  I have played guitar for the past couple of years and love learning rock and alternative music.  I may not be the most technically advance musician, but I sure do like noodling on the axe! Besides playing, I also love listening to a variety of genres, including Rock, Alternative, Rap, Electronic, and even Jazz from time to time! </p>
                            <img src={react} alt="badge" />
                            <img src={redux} alt="badge" />
                            <img src={sass} alt="badge" />
                            <img src={javascript} alt="badge" />
                            <img src={node} alt="badge" />
                            <img src={mongodb} alt="badge" />
                            <img src={heroku} alt="badge" />
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home
