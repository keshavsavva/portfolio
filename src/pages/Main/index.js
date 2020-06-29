import React, { Component } from 'react'
import './style.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Portfolio from '../Portfolio';
import About from '../About';
import streakPhoto from './IMG_0836.jpg'

export class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className='container text-center' id="home">
                    <div className="homeInfo py-5">
                        <h1 className='mt-2 display-3'>Keshav <span class='font-weight-bold greenText'>Avva</span></h1>
                        <h4 className='mb-5'>Web Developer</h4>
                        <a 
                            href="#about"
                        >
                            <ArrowDropDownCircleIcon className="icon" fontSize='large'></ArrowDropDownCircleIcon>
                        </a>    
                    </div>
                </div>
                <About />
                <section className='text-center section feature-box py-5' id="portfolio">
                    <div className='container'>
                        <h2 className="my-4 display-4">My <span class='font-weight-bold greenText'>Portfolio</span></h2>
                        <Portfolio />
                    </div>
                </section>
                <div className='parallax'>

                </div>
                <section className='text-center section feature-box py-5 ' id="contact">
                    <div className='container'>
                        <h2 className="my-4 display-4">Contact <span class='font-weight-bold greenText'>Me</span></h2>
                        <p className='mb-5'>Web Developer with a background in project engineering and academic research with strong problem-solving and  leadership skills. An excellent communicator and collaborator who also  works well on team-based projects with very strong interpersonal skills. </p>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default Main
