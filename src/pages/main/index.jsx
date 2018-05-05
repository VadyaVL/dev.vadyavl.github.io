import React, { Component } from 'react';

import Menu from '../menu';
import { HomePage, AboutPage}  from '../sections';

import './index.scss';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Menu />
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="resume">
          <HomePage />
        </section>
        <section id="work">
          <HomePage />
        </section>
        <section id="review">
          <HomePage />
        </section>
      </div>
    );
  }
}

export default MainPage;
