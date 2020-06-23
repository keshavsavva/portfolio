import React, { Component } from 'react';
import Banner from '../../components/Banner';
import "../../styles/output.css"
import codingQuiz from './img/codingQuiz.png'
import eat from './img/EatDaBurger.png'
import eHub from './img/eventHub.png'
import passGen from './img/passGen.png'
import qStream from './img/quaranstreamLogo.png'
import workDay from './img/workDay.png'
import hcPro from './img/hcPro.png'
export class Portfolio extends Component {
    render() {
        return (
            <div class="container main-container">
                <div class="row">
                <div class="col-md-12">
                    <h1>Portfolio</h1>
                </div>
                </div>
                <div class="row">
                    <Banner link="https://project3-healthcarepro.herokuapp.com/" image={hcPro} name="HealthCare Pro" placement="left-start" GHlink="https://github.com/keshavsavva/Healthcare-Pro" description="A role-based application that helps doctors and patients with the management of healthcare."/> 
                    <Banner link="https://limitless-chamber-20765.herokuapp.com/landing.html" image={qStream} name="QuaranStream" placement="right-start" GHlink="https://github.com/keshavsavva/QuaranStream" description="QuaranStream: an app for connecting you with content based on your favorite media types and genres"/>
                </div>
                <div class="row">
                    <Banner link="https://keshavsavva.github.io/EventHub/" image={eHub} name="EventHub" placement="left-start" GHlink="https://github.com/keshavsavva/EventHub" description="EventHub App for finding Public Events based on your location"/>
                    <Banner link="https://keshavsavva.github.io/Work-Day-Scheduler/" image={workDay}name="Work Day Scheduler" placement="right-start" GHlink="https://github.com/keshavsavva/Work-Day-Scheduler" description="An application for scheduling you Work Day."/>
                </div>
                <div class="row">
                    <Banner link="https://keshavsavva.github.io/Coding-Quiz/" image={codingQuiz} name="Coding Quiz" placement="left-start" GHlink="https://github.com/keshavsavva/Coding-Quiz" description="Test you coding skills here!"/>
                    <Banner link="https://keshavsavva.github.io/Password-Generator/" image={passGen} name="Password Generator" placement="right-start" GHlink="https://github.com/keshavsavva/Password-Generator" description="Generates a random password based off of your required inputs"/>
                </div>
            </div>
        )
    }
}

export default Portfolio
