import React, { Component } from 'react';

import './index.scss';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page-container">
        <header className="main-page-header">
          <h1 className="main-page-title">Welcome to React</h1>
        </header>
        <p className="main-page-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default MainPage;
