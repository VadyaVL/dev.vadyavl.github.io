import * as React from 'react';

import './index.scss';

interface Props { 
  sectionList: any[];
}

class Menu extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <nav>
                <ul>
                    {this.props.sectionList.map((section: any, index: number) => (
                        <li key={`menu_${index}`}><a href={`#${section.id}`}>{section.title}</a></li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Menu;