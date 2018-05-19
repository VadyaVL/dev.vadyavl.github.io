import * as React from 'react';

import MenuItem from './menu-item';

import './index.scss';

interface MenuProps {
	sectionList: any[];
}

class Menu extends React.Component<MenuProps> {
	public render(): JSX.Element {
		return (
		<nav>
			<ul>
				{this.props.sectionList.map((section: any, index: number) => (
					<MenuItem
						key={`menu_${index}`}
						idSection={section.id}
						titleSection={section.title}
					/>
				))}
			</ul>
		</nav>
		);
	}
}

export default Menu;
