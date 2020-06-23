import React, { Component } from 'react'
import "../../styles/output.css"
import headshot from './img/headshot.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TextLoop from "react-text-loop";

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
                                <a href="mailto:keshav.s.avva@gmail.com" class="email">
                                    <EmailIcon />
                                    {" "}
                                    keshav.s.avva@gmail.com
                                </a>  
                                <a href="https://www.linkedin.com/in/keshav-a-a2871393/">
                                    <LinkedInIcon className="icon1" fontSize="large"/>
                                </a>
                                <a href="https://drive.google.com/file/d/1JE8D7i6qQc2d9EnRE343eico7PWoV-uS/view?usp=sharing">
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" style={{textAlign: "center"}}>
                            <h5> My Favorite Technologies:</h5>
                            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                                <div>
                                    <img src={react} className="tech" alt="badge" />
                                    {" "}
                                    <span>REACT</span>
                                </div>
                                <div>
                                    <img src={redux} className="tech" alt="badge" />
                                    {" "}
                                    <span>REDUX</span>
                                </div>
                                <div>
                                    <img src={sass} className="tech" alt="badge" />
                                    {" "}
                                    <span>SASS</span>
                                </div>
                                <div>
                                    <img src={javascript} className="tech" alt="badge" />
                                    {" "}
                                    <span>JAVASCRIPT</span>
                                </div>
                                <div>
                                    <img src={node} className="tech" alt="badge" />
                                    {" "}
                                    <span>NODE.JS</span>
                                </div>
                                <div>
                                    <img src={mongodb} className="tech" alt="badge" />
                                    {" "}
                                    <span>MONGO DB</span>
                                </div>
                                <div>
                                    <img src={heroku} className="tech" alt="badge" />
                                    {" "}
                                    <span>HEROKU</span>
                                </div>
                                <div>
                                    <img src={materialui} className="tech" alt="badge" />
                                    {" "}
                                    <span>MATERIAL UI</span>
                                </div>
                            </TextLoop>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home
