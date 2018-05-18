import { Avatar, RaisedButton } from 'material-ui';
// tslint:disable-next-line:no-submodule-imports
import FileDownload from 'material-ui/svg-icons/file/file-download';
import * as React from 'react';

import * as profile from '../../images/profile-min.jpg';

import './about.scss';

class AboutPage extends React.Component {
	public render(): JSX.Element {
		return (
			<div className='about-page-container'>
				<div className='left-area'>
				<Avatar
					src={profile}
					size={114}
					style={{ margin: 5 }}
				/>
				</div>
				<div className='right-area'>
					<h2>About me</h2>
					{/* tslint:disable-next-line:max-line-length */}
					<p>Since childhood, fond of mathematics and physics. I brought pleasure to solve interesting tasks. 2012 entered the University. There I became interested in programming. Over the years at University I gained basic knowledge of IT. Currently, the main activity - programming. To improve their knowledge, I read books on programming. With the last-read book "Code complete" (Steve McConnell) and "Java: The Complete Reference" (Herbert Schildt). Now I want to find a job that will allow me to prove my knowledge of programming, and get new ones. I also want to improve the level of English. I would like to work as a web designer or developer of 3D applications.</p>
					<div>
						<div>
							<h2>Contact Details</h2>
							<p>
								<span>Vadym Lytvyn</span>
								<br/>
								<span>Kyiv</span>
								<br/>
								<br/>
								<span>+38 098 948 07 22</span>
								<br/>
								<span>vadyavl@gmail.com</span>
							</p>
						</div>
						<div>
							<RaisedButton
								href='https://drive.google.com/file/d/1kqkFxc2R6b_NC-4QH5PhbcRlBylEBc1g/view'
								target='_blank'
								label='Resume'
								primary={true}
								style={{ marginTop: 20 }}
								icon={<FileDownload />}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;
