import autobind from 'autobind-decorator';
import * as React from 'react';
import { goToAnchor } from 'react-scrollable-anchor';

import './menu-item.scss';

interface MenuItemProps {
	idSection: string;
	titleSection: string;
}

class MenuItem extends React.Component<MenuItemProps> {
	public render(): JSX.Element {
		const { idSection, titleSection } = this.props;

		return (
			<li>
				<a href={`#${idSection}`} onClick={this.onClick}>
					{titleSection}
				</a>
			</li>
		);
	}

	@autobind
	private onClick(): void {
		const { idSection } = this.props;

		goToAnchor(idSection, false);
	}
}

export default MenuItem;
