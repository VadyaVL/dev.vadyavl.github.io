import autobind from 'autobind-decorator';
import IconButton from 'material-ui/IconButton';
import { white } from 'material-ui/styles/colors';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import * as React from 'react';
import { connect } from 'react-redux';
import { goToAnchor } from 'react-scrollable-anchor';

import * as backgroundImage from '../../images/header-background-min.jpg';
import { BlurBanner, Social } from '../components';

import './home.scss';

interface ReduxProps {
	homeTitle: string;
	homeText: string;
	socialLinks: string[];
}

class HomePage extends React.Component<ReduxProps> {
	private backgroundStyle: React.CSSProperties = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: 'top center',
		backgroundRepeat  : 'no-repeat',
		backgroundSize: 'cover',
	};
	private iconButtonStyle: React.CSSProperties = {
		height: 120,
		padding: 30,
		width: 120,
	};
	private iconStyle: React.CSSProperties = {
		color: white,
		height: 60,
		width: 60,
	};

	public render(): JSX.Element {
		const { homeTitle, homeText, socialLinks } = this.props;

		return (
			<div className='home-page-container' style={this.backgroundStyle}>
				<BlurBanner
					title={homeTitle}
					text={homeText}
					component={<Social socialLinks={socialLinks} />}
				/>
				<div className='action-button'>
					<IconButton
						style={this.iconButtonStyle}
						iconStyle={this.iconStyle}
						onClick={this.onClick}
					>
						<ExpandMore />
					</IconButton>
				</div>
			</div>
		);
	}

	@autobind
	private onClick(): void {
		goToAnchor('about', false);
	}
}

const mapStateToProps = (state): ReduxProps => {
	return {
		homeText: state.portfolio.homeText,
		homeTitle: state.portfolio.homeTitle,
		socialLinks: state.portfolio.socialLinks,
	};
};

const mapDispatchToProps = (/*dispatch*/) => {
	return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
