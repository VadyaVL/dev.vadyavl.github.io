import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

import profile from '../../images/profile-min.jpg';

import './about.scss';

const styles = {
  button: {
    marginTop: 20,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const styleAvatar = {margin: 5};

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="left-area">
        <Avatar
          src={profile}
          size={114}
          style={styleAvatar} />
        </div>
        <div className="right-area">
          <h2>About me</h2>
          <p>Since childhood, fond of mathematics and physics. I brought pleasure to solve interesting tasks. 2012 entered the University. There I became interested in programming. Over the years at University I gained basic knowledge of IT. Currently, the main activity - programming. To improve their knowledge, I read books on programming. With the last-read book "Code complete" (Steve McConnell) and "Java: The Complete Reference" (Herbert Schildt). Now I want to find a job that will allow me to prove my knowledge of programming, and get new ones. I also want to improve the level of English. I would like to work as a web designer or developer of 3D applications.</p>

          <div>
            <div>
              <h2>Contact Details</h2>
              <p>
                <span>Vadym Lytvyn</span>
                <br/>
                <span>Kyiv</span>
                <br/>
                <br/>
                <span>+38 098 948 07 22</span>
                <br/>
                <span>vadyavl@gmail.com</span>
              </p>
            </div>
            <div>
              <RaisedButton
                href="https://drive.google.com/file/d/1kqkFxc2R6b_NC-4QH5PhbcRlBylEBc1g/view"
                target="_blank"
                label="Resume"
                primary={true}
                style={styles.button}
                icon={<FileDownload />}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutPage;