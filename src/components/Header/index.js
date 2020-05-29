import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mobile">
                            <Link className = "logo" to="/">Keshav Avva</Link>
                        </div>
                        <div className="col-md-6 bar">
                            <nav>
                                <Link to="/">About</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
