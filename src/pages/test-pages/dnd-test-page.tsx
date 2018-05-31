import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import DSItem from './ds-item';

import './dnd-test-page.scss';

class DNDTestPage extends React.Component {
	public render(): JSX.Element {

		const items = [1, 2, 3, 4, 5];

		return (
			<div className='dnd-test-page-container'>
				<span>DND</span>
				<div className='draggable-list'>
					{items.map((item: number, index: number): JSX.Element => <DSItem key={index} value={item} />)}
				</div>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(DNDTestPage);
