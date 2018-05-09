import * as React from 'react';

import { SectionDefinition } from '../../serviceClasses/index';

import './index.scss';

interface Props { 
  sectionList: Array<SectionDefinition>;
}

class Menu extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <nav>
                <ul>
                    {this.props.sectionList.map((section: SectionDefinition, index: number) => (
                        <li key={`menu_${index}`}><a href={`#${section.id}`}>{section.title}</a></li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Menu;