import React, { Component } from 'react';

import './index.scss';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            sections: [ {id: 'home', title: 'Home'},
                        {id: 'about', title: 'About & Contact'},
                        {id: 'resume', title: 'Resume'},
                        {id: 'work', title: 'Works'},
                        {id: 'review', title: 'Reviews'}],
        };
    }

render() {

    return (
        <nav>
            <ul>
                {this.state.sections.map((section, index) => (
                    <li key={`menu_${index}`}><a href={`#${section.id}`}>{section.title}</a></li>
                ))}
            </ul>
        </nav>
    );
  }
}

export default Menu;
