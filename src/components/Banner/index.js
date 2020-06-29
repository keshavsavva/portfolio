import React, { Component } from 'react'
import "../../styles/output.css"
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "rgb(42, 46, 40)",
      color: '#fff',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(15),
      border: '1px solid #0c8b50',
      textAlign: 'center'
    },
  }))(Tooltip);
export class Banner extends Component {

    render() {
        return (
            <div>
                
                    <HtmlTooltip
                        title={
                            <React.Fragment>
                                <Typography color="inherit">{this.props.name}</Typography>
                                <p>{this.props.description}</p>
                                <a class="links" href={this.props.link}>
                                    {"Deployed"}
                                </a>
                                <br></br>
                                <a class="links" href={this.props.GHlink}>
                                    {"Github"}
                                </a>
                            </React.Fragment>
                        }
                        placement="right"
                        interactive
                    >
                        <div>
                            <a href={this.props.link}>
                                <div class="banner">
                                    <img class="portImg" alt = "appicon" src= {this.props.image} />
                                    <div class="text-block">
                                        <h3>{this.props.name}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </HtmlTooltip>
          </div>
        )
    }
}

export default Banner
