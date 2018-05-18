import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import { white } from 'material-ui/styles/colors';
import { connect } from 'react-redux';

import { BlurBanner, Social } from '../components';
import * as backgroundImage from '../../images/header-background-min.jpg';

import './home.scss';

interface ReduxProps { 
  homeTitle: string; 
  homeText: string;
  socialLinks: string[],
}

class HomePage extends React.Component<ReduxProps> {
  
  private backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
  };
  private iconButtonStyle: React.CSSProperties = {
    width: 120,
    height: 120,
    padding: 30,
  };
  private iconStyle: React.CSSProperties = {
    width: 60,
    height: 60,
    color: white
  };

  public render(): JSX.Element {
    const { homeTitle, homeText, socialLinks } = this.props;

    return (
      <div className='home-page-container' style={this.backgroundStyle}>
        <BlurBanner
          title={homeTitle}
          text={homeText}
          component={<Social socialLinks={socialLinks} />} 
        />
        <div className="action-button">
          <IconButton
            style={this.iconButtonStyle}
            iconStyle={this.iconStyle}
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
    homeText: state.portfolio.homeText,
    socialLinks: state.portfolio.socialLinks,
  }
};

const mapDispatchToProps = (/*dispatch*/) => {
  return { }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
