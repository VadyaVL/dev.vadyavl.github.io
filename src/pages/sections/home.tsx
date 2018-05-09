import * as React from "react";
import { SocialIcon } from 'react-social-icons';
import IconButton from 'material-ui/IconButton';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import { white } from 'material-ui/styles/colors';
import { connect } from 'react-redux';

import * as backgroundImage from '../../images/header-background-min.jpg';

import './home.scss';

interface ReduxProps { 
  homeTitle: string; 
  homeText: string;
}

interface Props extends ReduxProps { 
  
}

class HomePage extends React.Component<Props> {
  
  private backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
  };

  public render(): JSX.Element {
    return (
      <div className='home-page-container' style={this.backgroundStyle}>
        <div className="blur-banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{this.props.homeTitle}</h1>
            <h3>{this.props.homeText}</h3>
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
            }}
            href='#about'>
            <ExpandMore />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state): ReduxProps => {
  return {
    homeTitle: state.portfolio.homeTitle,
    homeText: state.portfolio.homeText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);