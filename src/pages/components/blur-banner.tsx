import * as React from 'react';

import './blur-banner.scss';

interface Props {
	title: string;
	text: string;
	component?: JSX.Element;
}

class BlurBanner extends React.Component<Props> {
	public render(): JSX.Element {
		const { title, text, component } = this.props;

		return (
			<div className='blur-banner'>
				<div className='banner-text'>
					<h1 className='responsive-headline'>{title}</h1>
					<h3>{text}</h3>
				</div>
				<hr />
				{component}
			</div>
		);
	}
}

export default BlurBanner;
