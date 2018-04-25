import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import IconButton from 'material-ui/IconButton';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { white } from 'material-ui/styles/colors';
import backgroundImage from '../../../images/header-background.jpg'

import './index.scss';

class HomePage extends Component {
  render() {

    const rootStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'top center',
      backgroundSize: 'cover',
    };

    return (
      <div className="home-page-container" style={rootStyle}>
        <div className="blur-banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Vadym Lytvyn.</h1>
            <h3>I want to start a career in IT with the ability to demonstrate their knowledge and gain new ones.
                I love programming (<span>C#</span>, <span>java</span>). Like to solve interesting problems. I love to read books on programming.
                Let's <a href="#about">start scrolling</a> and learn more <a href="#about">about me</a>.
            </h3>
          </div>
          <hr />
          <div className="social-icons">
            <SocialIcon url="https://www.linkedin.com/in/vadym-lytvyn/" />
            <SocialIcon url="https://plus.google.com/u/0/+VadimLytvin" />
            <SocialIcon url="https://vk.com/lytvin" />
            <SocialIcon url="https://github.com/VadyaVL" />
          </div>
        </div>
        <div className="action-button">
          <MuiThemeProvider>
            <IconButton
              style={{
                width: 120,
                height: 120,
                padding: 30,
              }}
              iconStyle={{
                width: 60,
                height: 60,
                color: white
              }}>
              <ExpandMore />
            </IconButton>
          </MuiThemeProvider>  
        </div>
      </div>
    );
  }
}

export default HomePage;
