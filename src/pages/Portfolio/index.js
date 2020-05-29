import React, { Component } from 'react';
import Banner from '../../components/Banner';

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
                    <Banner link="https://keshavsavva.github.io/Team3/" image="Assets/Images/eventHub.png" name="EventHub" />
                    <Banner link="https://limitless-chamber-20765.herokuapp.com/landing.html" image="Assets/Images/quaranstreamLogo.png" name="QuaranStream" />
                </div>
                <div class="row">
                    <Banner link="https://keshavsavva.github.io/Homework4/" image="Assets/Images/codingQuiz.png" name="Coding Quiz" />
                    <Banner link="https://keshavsavva.github.io/Homework5/" image="Assets/Images/workDay.png" name="Work Day Scheduler" />
                </div>
                <div class="row">
                    <Banner link="https://keshav-eat-da-burger.herokuapp.com/" image="Assets/Images/EatDaBurger.png" name="Eat-Da-Burger" />
                    <Banner link="https://keshavsavva.github.io/Homework3/" image="Assets/Images/passGen.png" name="Password Generator" />
                </div>
            </div>
        )
    }
}

export default Portfolio
