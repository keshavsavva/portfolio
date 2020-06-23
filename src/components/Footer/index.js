import React, { Component } from 'react'
import "../../styles/output.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
export class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="container">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-1">
                            <a href="https://www.linkedin.com/in/keshav-a-a2871393/">
                                <LinkedInIcon className="icon" fontSize="large"/>
                            </a>
                        </div>
                        <div className="col-sm-2">
                            <a href="https://drive.google.com/file/d/1JE8D7i6qQc2d9EnRE343eico7PWoV-uS/view?usp=sharing">
                                <DescriptionIcon className="icon" fontSize="large"/>
                            </a>
                        </div>
                        <div className="col-sm-1">
                            <a href="https://github.com/keshavsavva">
                                <GitHubIcon className="icon" fontSize="large"/>
                            </a>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-12">Copyright &copy; Keshav Avva</div>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer


