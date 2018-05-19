import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Menu from '../menu';
import { AboutPage, HomePage } from '../sections';

import './index.scss';

class MainPage extends React.Component {
	private sectionList: any[] = [
		{ id: 'home', title: 'Home' },
		{ id: 'about', title: 'About & Contact' },
		{ id: 'resume', title: 'Resume' },
		{ id: 'work', title: 'Works' },
		{ id: 'review', title: 'Reviews' },
	];

	public render(): JSX.Element {
		return (
			<div className='main-page'>
				<Menu sectionList={this.sectionList} />
				<ScrollableAnchor id={'home'}>
					<HomePage />
				</ScrollableAnchor>
				<ScrollableAnchor id={'about'}>
					<AboutPage />
				</ScrollableAnchor>
				<ScrollableAnchor id={'resume'}>
					<HomePage />
				</ScrollableAnchor>
				<ScrollableAnchor id={'work'}>
					<HomePage />
				</ScrollableAnchor>
				<ScrollableAnchor id={'review'}>
					<HomePage />
				</ScrollableAnchor>
			</div>
		);
	}
}

export default MainPage;
