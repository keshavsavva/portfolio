import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import "./style.css"
import ProgressBar from 'react-bootstrap/ProgressBar'

function Experience() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h1 className="my-4 display-5">Developer <span class='font-weight-bold greenText'>Skills</span></h1>
                    <h5>HTML</h5>
                    <ProgressBar variant ="success" animated now={90} style={{width: "90%", background: "#b9eed5" }}/>
                    <br />
                    <h5>JavaScript</h5>
                    <ProgressBar variant ="success" animated now={90} style={{width: "90%", background: "#b9eed5" }}/>
                    <br />
                    <h5>CSS</h5>
                    <ProgressBar variant ="success" animated now={75} style={{width: "90%", background: "#b9eed5" }}/>
                    <br />
                    <h5>Node.JS</h5>
                    <ProgressBar variant ="success" animated now={70} style={{width: "90%", background: "#b9eed5" }}/>
                    <br />
                    <h5>Mongo DB</h5>
                    <ProgressBar variant ="success" animated now={85} style={{width: "90%", background: "#b9eed5" }}/>
                    <br />
                    <h5>MySQL</h5>
                    <ProgressBar variant ="success" animated now={75} style={{width: "90%", background: "#b9eed5" }}/>
                    <br />
                </div>
                <div className="col-md-6">
                <h1 className="my-4 display-5">My <span class='font-weight-bold greenText'>Experience</span></h1>
                    <br />
                    <div className="experience">
                        <h4 className = "title"><SettingsIcon fontSize="large" />{" "}Project Engineering Intern</h4>
                        <h5>Fujifilm Diosynth Biotechnologies, Raleigh, NC</h5>
                        <h6>August, 2019 - April, 2020</h6>
                    </div>
                    <br />
                    <br />
                    <div className="experience">
                        <h4 className = "title"><FingerprintIcon fontSize="large"/>{" "}Undergraduate Nanotribology Research</h4>
                        <h5>Nanotribology Lab at NC State, Raleigh, NC</h5>
                        <h6>January, 2017 - January, 2018</h6>
                    </div>
                    <br />
                    <br />
                    <div className="experience">
                        <h4 className = "title"><MonetizationOnIcon fontSize="large"/>{" "}Fundraising Chair</h4>
                        <h5>Sigma Nu at NC State, Raleigh, NC</h5>
                        <h6>August, 2016 - August, 2017</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
