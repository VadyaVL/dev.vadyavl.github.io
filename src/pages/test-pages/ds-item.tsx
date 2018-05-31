import * as React from 'react';
import { DragSource } from 'react-dnd';

import './ds-item.scss';

const itemSource = {
	beginDrag: (props: any): any => props,
};

const collect = (connect: any, monitor: any): any => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	};
};

interface Props {
	value?: number;
}

interface DragProps extends Props {
	connectDragSource: any;
}

class DSItem extends React.Component<DragProps> {
	public render(): JSX.Element {
		const { value, connectDragSource } = this.props;

		return connectDragSource (
			<div className='item'>
				<div
					className='title'
				>
					{`Title ${value}`}
				</div>
			</div>,
		);
	}
}

export default DragSource<Props>('ITEM', itemSource, collect)(DSItem);
