import React, { Component } from 'react'
import TextLoop from "react-text-loop";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import node from "./img/node.png";
import mongodb from "./img/mongo.png";
import sass from "./img/sass.png";
import materialui from "./img/materialui.png";
import heroku from "./img/heroku.png";
import mysql from "./img/mysql.png";
import bootstrap from "./img/bootstrap.png";
import css from "./img/css.png";
import html from "./img/html.png";
import jquery from "./img/jquery.png";
import headshot from './img/headshot.jpg';
import './style.css'
import Paper from '@material-ui/core/Paper'
import CodeIcon from '@material-ui/icons/Code';



export class About extends Component {
    render() {
        return (
            <div>
                <section className='text-center section feature-box py-5 ' id="about">
                    <div className='container text-center'>
                        <h2 className="my-4 display-4">About <span class='font-weight-bold greenText'>Me</span></h2>
                        <h5 className='mb-5 bio'>Web Developer with a background in project engineering and academic research with strong problem-solving and  leadership skills. An excellent communicator and collaborator who also  works well on team-based projects with very strong interpersonal skills. </h5>
                        <div className="row">
                            <div className="col-lg-4">
                                <Paper className="paper" elevation={3} style={{width: "100%", height: "370px"}}>
                                    <br />
                                    <img class="mainPic" alt="mainPic" src={headshot} />
                                </Paper>
                                <br />
                            </div>
                            <div className="col-lg-4">
                                
                                <Paper className="paperCenter" elevation={3} style={{width: "100%", height: "370px"}}>
                                    <h3 style={{paddingTop: "10%"}}> My Favorite Technologies:</h3>
                                    <br />
                                    <br />
                                    <TextLoop interval={2500}>
                                        <div>
                                            <img src={react} style={{width: "150px"}} alt="tech"/> 
                                            <h5>React</h5>
                                        </div>
                                        <div>
                                            <img src={node} style={{width: "150px"}} alt="tech"/> 
                                            <h5>Node.js</h5>
                                        </div>
                                        <div>
                                            <img src={javascript} style={{width: "150px"}} alt="tech"/> 
                                            <h5>JavaScript</h5>
                                        </div>
                                        <div>
                                            <img src={materialui} style={{width: "150px"}} alt="tech"/> 
                                            <h5>Material UI</h5>
                                        </div>
                                        <div>
                                            <img src={redux} style={{width: "150px"}} alt="tech"/> 
                                            <h5>Redux</h5>
                                        </div>
                                        <div>
                                            <img src={mysql} style={{width: "150px"}} alt="tech"/> 
                                            <h5>My SQL</h5>
                                        </div>
                                        <div>
                                            <img src={mongodb} style={{width: "150px"}} alt="tech"/> 
                                            <h5>Mongo DB</h5>
                                        </div>
                                        <div>
                                            <img src={sass} style={{width: "150px"}} alt="tech"/> 
                                            <h5>SASS</h5>
                                        </div>
                                        <div>
                                            <img src={jquery} style={{width: "150px"}} alt="tech"/> 
                                            <h5>jQuery</h5>
                                        </div>
                                        <div>
                                            <img src={bootstrap} style={{width: "150px"}} alt="tech"/> 
                                            <h5>Bootstrap</h5>
                                        </div>
                                        <div>
                                            <img src={heroku} style={{width: "150px"}} alt="tech"/> 
                                            <h5>Heroku</h5>
                                        </div>
                                        <div>
                                            <img src={css} style={{width: "150px"}} alt="tech"/> 
                                            <h5>CSS</h5>
                                        </div>
                                        <div>
                                            <img src={html} style={{width: "150px"}} alt="tech"/> 
                                            <h5>HTML</h5>
                                        </div>
                                    </TextLoop>
                                </Paper>
                                <br />
                            </div>
                            <div className="col-lg-4">
                                <Paper className="paper" elevation={3} style={{width: "100%", height: "370px"}}>
                                    <br />
                                    <CodeIcon className="paperIcon"/>
                                    <br />
                                    <br />
                                    <h3>Web Developer</h3>
                                    <br />
                                    <h5 style={{width: "80%", marginLeft: "10%"}}>Driven to make you or your company an application that is both highly functional and captivatingly beautiful.</h5>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
