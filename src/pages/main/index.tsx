import * as React from 'react';

import Menu from '../menu';
import { HomePage, AboutPage}  from '../sections';
import { SectionDefinition } from '../../serviceClasses/index';

import './index.scss';

interface Props { 
  
}

class MainPage extends React.Component<Props> {

  private sectionList = [ 
      new SectionDefinition('home', 'Home'),
      new SectionDefinition('about', 'About & Contact'),
      new SectionDefinition('resume', 'Resume'),
      new SectionDefinition('work', 'Works'),
      new SectionDefinition('review', 'Reviews')
  ];

  public render(): JSX.Element {
    return (
      <div className='main-page'>
        <Menu sectionList={this.sectionList} />
        <section id='home'>
          <HomePage />
        </section>
        <section id='about'>
          <AboutPage />
        </section>
        <section id='resume'>
          <HomePage />
        </section>
        <section id='work'>
          <HomePage />
        </section>
        <section id='review'>
          <HomePage />
        </section>
      </div>
    );
  }
}

export default MainPage;
