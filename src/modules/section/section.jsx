import React, {Component} from 'react';

export default class Section extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="section">
				{this.props.children}
			</div>
		);
	}
}