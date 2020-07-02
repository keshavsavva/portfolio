import React, { Component } from 'react';
import Banner from '../../components/Banner';
import "../../styles/output.css"
import codingQuiz from './img/codingQuiz.png'
import eHub from './img/eventHub.png'
import passGen from './img/passGen.png'
import qStream from './img/quaranstreamLogo.png'
import workDay from './img/workDay.png'
import hcPro from './img/hcPro.png'
import Carousel from 'react-bootstrap/Carousel'
export class Portfolio extends Component {
    render() {
        return (
            <div>
                <Carousel className="carousel-fade ">
                    <Carousel.Item >
                        <Banner link="https://project3-healthcarepro.herokuapp.com/" image={hcPro} name="HealthCare Pro" GHlink="https://github.com/keshavsavva/Healthcare-Pro" description="A role-based application that helps doctors and patients with the management of healthcare."/> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Banner link="https://limitless-chamber-20765.herokuapp.com/landing.html" image={qStream} name="QuaranStream" GHlink="https://github.com/keshavsavva/QuaranStream" description="QuaranStream: an app for connecting you with content based on your favorite media types and genres"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Banner link="https://keshavsavva.github.io/EventHub/" image={eHub} name="EventHub" GHlink="https://github.com/keshavsavva/EventHub" description="EventHub App for finding Public Events based on your location"/> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Banner link="https://keshavsavva.github.io/Work-Day-Scheduler/" image={workDay} name="Work Day Scheduler" GHlink="https://github.com/keshavsavva/Work-Day-Scheduler" description="An application for scheduling you Work Day."/> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Banner link="https://keshavsavva.github.io/Coding-Quiz/" image={codingQuiz} name="Coding Quiz" GHlink="https://github.com/keshavsavva/Coding-Quiz" description="Test you coding skills here!"/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Banner link="https://keshavsavva.github.io/Password-Generator/" image={passGen} name="Password Generator"  GHlink="https://github.com/keshavsavva/Password-Generator" description="Generates a random password based off of your required inputs"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Portfolio
