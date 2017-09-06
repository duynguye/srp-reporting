import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import _ from 'lodash';

export default class Header extends Component {
	constructor (props) {
		super (props);

		// Set the title of the document to the title given.
		document.title = this.props.title + ' '+ this.props.category;
	}

	render() {
	    let linkClassName = classNames({
            'home-link': true,
            'home-link-shielded': this.props.category,
            'home-link-shielded-with-branch': this.props.branch
        });

	    let logoClassName = classNames({
            'logo': true,
            'logo-shielded': this.props.category
        });

	    let categoryClassName = classNames({
            'header-category': true,
            'header-category-shielded': this.props.branch
        });

	    let formattedBranchName = _.replace(this.props.branch, '_', ' ');

		return (
			<header>
				<img className={logoClassName} src={this.props.logo} alt={this.props.title} />
                <div className={linkClassName}><Link to="/">{this.props.title}</Link></div>
                <div className={categoryClassName}>{this.props.category}</div>
                <div className="header-branch">{formattedBranchName}</div>
			</header>
		);
	}
}