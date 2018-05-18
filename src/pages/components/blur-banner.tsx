import * as React from "react";

import './blur-banner.scss';

interface ReduxProps { 
  title: string; 
  text: string;
  component?: JSX.Element;
}

class HomePage extends React.Component<ReduxProps> {
  public render(): JSX.Element {
    const { title, text, component } = this.props;

    return (
        <div className="blur-banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{title}</h1>
            <h3>{text}</h3>
          </div>
          <hr />
          {component}
        </div>
    );
  }
}

export default HomePage;
