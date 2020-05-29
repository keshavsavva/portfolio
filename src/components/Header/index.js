import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mobile">
                            <a className = "logo" href="/">Keshav Avva</a>
                        </div>
                        <div className="col-md-6 bar">
                            <nav>
                                <a href="/">About</a>
                                <a href="/portfolio">Portfolio</a>
                                <a href="/contact">Contact</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
