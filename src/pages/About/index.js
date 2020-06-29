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
import headshot from './img/headshot.jpg'
import './style.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export class About extends Component {
    render() {
        return (
            <div>
                <section className='text-center section feature-box py-5 ' id="about">
                    <div className='container text-center'>
                        <h2 className="my-4 display-4">About <span class='font-weight-bold greenText'>Me</span></h2>
                        <h5 className='mb-5 bio'>Web Developer with a background in project engineering and academic research with strong problem-solving and  leadership skills. An excellent communicator and collaborator who also  works well on team-based projects with very strong interpersonal skills. </h5>
                        <Grid container spacing={4}>
                            <Grid item xs={4}>
                         
                                <h4> My Favorite Technologies:</h4>
                    
                            </Grid>
                            <Grid item xs={4}>
                              
                                    <img class="mainPic" alt="mainPic" src={headshot} />
                             
                            </Grid>
                            <Grid item xs={4}>
                                
                                <h4>My Hobbies:</h4>
                             
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
