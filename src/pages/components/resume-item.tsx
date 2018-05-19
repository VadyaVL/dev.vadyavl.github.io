import * as React from 'react';

import './resume-item.scss';

interface Props {
	name: string;
	type: number;
	content: any[];
	/* title: string;
	subContent: string[];
	content: string[]; */
}

class ResumeItem extends React.Component<Props> {
	public render(): JSX.Element {
		const { name, type, content } = this.props;

		return (
			<div className='resume-item'>
				<div className='name'>
					<span>{name}</span>
				</div>
				<div className='item-body'>
					{
						type === 1 && content ?
						content.map((item: any, index: number): JSX.Element => {
							const { title, dateParagraphs, paragraphs } = item;

							return (
								<div key={index}>
								<div className='title'>{title}</div>
									<div className='sub-content'>
									{
										dateParagraphs ?
										dateParagraphs.map((sub: any, dpIndex: number): JSX.Element => {
											return (
											<p key={dpIndex}>
												<span>{sub.text}</span>
												<span>{sub.date}</span>
											</p>);
										}) : null
									}
									</div>
									<div className='content'>
									{
										paragraphs ?
										paragraphs.map((text: string, pIndex: number): JSX.Element => {
											return (<p key={pIndex}>{text}</p>);
										}) : null
									}
									</div>
								</div>
							);
						}) : null
					}
				</div>
			</div>
		);
	}
}

export default ResumeItem;
