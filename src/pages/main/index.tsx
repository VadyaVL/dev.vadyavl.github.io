import * as React from 'react';

import Menu from '../menu';
import { AboutPage, HomePage} from '../sections';

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
