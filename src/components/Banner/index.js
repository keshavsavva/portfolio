import React, { Component } from 'react'
import "../../styles/style.css"
export class Banner extends Component {

    render() {
        return (
            <div class="col-md-6">
                <div class="banner">
                    <a href={this.props.link}>
                        <img class="portImg" alt = "appicon" src= {this.props.image} />
                        <div class="text-block">
                        {this.props.name}
                        </div>
                    </a>
                </div>
          </div>
        )
    }
}

export default Banner
