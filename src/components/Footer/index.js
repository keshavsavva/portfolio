import React, { Component } from 'react'
import linkedIn from './linkedInIcon.png'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="container">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-1">
                            <a href="https://www.linkedin.com/in/keshav-a-a2871393/">
                            <img className="icon" alt="linkedIn" src={linkedIn}></img>
                            </a>
                        </div>
                        <div className="col-sm-2">
                            <a href="https://drive.google.com/file/d/1M4bGbBCHaYMBLEJKsjOUE141o7zDqJ_i/view?usp=sharing">
                            <img className="icon" alt="resume" src="https://cdn3.iconfinder.com/data/icons/20-business-flat-icons-shadow/96/75-512.png"></img>
                            </a>
                        </div>
                        <div className="col-sm-1">
                            <a href="https://github.com/keshavsavva">
                            <img className="icon" alt="github" src="https://icons-for-free.com/iconfiles/png/512/github+logo+media+online+share+social+icon-1320168531065664237.png"></img>
                            </a>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    Copyright &copy; Keshav Avva
                </section>
            </footer>
        )
    }
}

export default Footer


