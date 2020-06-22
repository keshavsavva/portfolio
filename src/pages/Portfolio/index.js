import React, { Component } from 'react';
import Banner from '../../components/Banner';
import "../../styles/output.css"
import codingQuiz from './codingQuiz.png'
import eat from './EatDaBurger.png'
import eHub from './eventHub.png'
import passGen from './passGen.png'
import qStream from './quaranstreamLogo.png'
import workDay from './workDay.png'
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
                    <Banner link="https://keshavsavva.github.io/EventHub/" image={eHub} name="EventHub" />
                    <Banner link="https://limitless-chamber-20765.herokuapp.com/landing.html" image={qStream} name="QuaranStream" />
                </div>
                <div class="row">
                    <Banner link="https://keshavsavva.github.io/Homework4/" image={codingQuiz} name="Coding Quiz" />
                    <Banner link="https://keshavsavva.github.io/Homework5/" image={workDay}name="Work Day Scheduler" />
                </div>
                <div class="row">
                    <Banner link="https://keshav-eat-da-burger.herokuapp.com/" image={eat}name="Eat-Da-Burger" />
                    <Banner link="https://keshavsavva.github.io/Homework3/" image={passGen} name="Password Generator" />
                </div>
            </div>
        )
    }
}

export default Portfolio
