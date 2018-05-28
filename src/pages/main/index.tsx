import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Menu from '../menu';
import { AboutPage, HomePage, ResumePage } from '../sections';
import { DNDTestPage } from '../test-pages';

import './index.scss';

class MainPage extends React.Component {
	private sectionList: any[] = [
		{ id: 'dnd-test', title: 'DND-Test' },
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
				<ScrollableAnchor id={'dnd-test'}>
					<DNDTestPage />
				</ScrollableAnchor>
				<ScrollableAnchor id={'home'}>
					<HomePage />
				</ScrollableAnchor>
				<ScrollableAnchor id={'about'}>
					<AboutPage />
				</ScrollableAnchor>
				<ScrollableAnchor id={'resume'}>
					<ResumePage />
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
