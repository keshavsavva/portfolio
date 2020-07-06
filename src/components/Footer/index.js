import React, { Component } from 'react'
import "./style.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
export class Footer extends Component {
    render() {
        return (
                <section className="container text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Are you looking for a well designed and functional project? Just send me a message to make it happen!</h3>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-sm-4">
                                    <a
                                    href="https://github.com/keshavsavva"
                                    >
                                        <GitHubIcon className="footerIcon"/>
                                    </a>
                                </div>
                                <div className="col-sm-4">
                                    <a
                                    href="https://drive.google.com/file/d/1JE8D7i6qQc2d9EnRE343eico7PWoV-uS/view?usp=sharing"
                                    >
                                        <DescriptionIcon className="footerIcon"/>
                                    </a>
                                </div>
                                <div className="col-sm-4">
                                    <a
                                    href="https://www.linkedin.com/in/keshavsavva/"
                                    >
                                        <LinkedInIcon className="footerIcon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12">Copyright &copy; Keshav Avva</div>
                    </div>
                </section>
        )
    }
}

export default Footer


