import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Menu from '../menu';
import { AboutPage, HomePage, ResumePage } from '../sections';

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
					<HomePage className='page'/>
				</ScrollableAnchor>
				<ScrollableAnchor id={'about'}>
					<AboutPage className='page' />
				</ScrollableAnchor>
				<ScrollableAnchor id={'resume'}>
					<ResumePage className='page' />
				</ScrollableAnchor>
				<ScrollableAnchor id={'work'}>
					<HomePage className='page' />
				</ScrollableAnchor>
				<ScrollableAnchor id={'review'}>
					<HomePage className='page' />
				</ScrollableAnchor>
			</div>
		);
	}
}

export default MainPage;
