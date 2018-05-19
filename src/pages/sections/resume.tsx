import * as React from 'react';
import { connect } from 'react-redux';

import { ResumeItem } from '../components';

import './resume.scss';

interface ReduxProps {
	resumeContent: any[];
}

class ResumePage extends React.Component<ReduxProps> {
	public render(): JSX.Element {
		const { resumeContent } = this.props;

		return (
			<div className='resume-page-container'>
				{
					resumeContent ?
					resumeContent.map((item: any, index: number): JSX.Element => {
						const { name, type, content } = item;

						return (
							<ResumeItem
								key={index}
								name={name}
								type={type}
								content={content}
							/>
						);
					}) : null
				}
			</div>
		);
	}
}

const mapStateToProps = (state): ReduxProps => {
	return {
		resumeContent: state.portfolio.resumeContent,
	};
};

const mapDispatchToProps = (/*dispatch*/) => {
	return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResumePage);
