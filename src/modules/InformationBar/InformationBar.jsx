import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const InfoItem = ({number, title, active, efficiencyClasses}) => {
    if (efficiencyClasses) {
        return (
            <div className={"info-item " + efficiencyClasses}>
                <p className="info-data">{number}</p>
                <p className="info-title">{title}</p>
            </div>
        );
    } else {
        return (
            <div className={active ? "info-item info-active" : "info-item"}>
                <p className="info-data">{number}</p>
                <p className="info-title">{title}</p>
            </div>
        );
    }
};

export default class InformationBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        let openActive = this.props.branch === 'open_requests';
        let breachesActive = this.props.branch === 'breaches';
        let warningsActive = this.props.branch === 'warnings';
        let efficiency = this.props.data.efficiency;
        let isNum = typeof efficiency === 'number';

        let efficiencyClasses = classNames(
            'efficiency',
            {
                danger: isNum ? efficiency <= 80 : false,
                warning: isNum ? efficiency > 80 && efficiency < 90 : false,
                boost: isNum ? efficiency > 100 : false
            }
        );

        return (
            <div className="category-information-bar">
                <div className="category-information-bar-title">{this.props.category}</div>
                <NavLink to={`/${this.props.id}?id=${this.props.id}&branch=open_requests`}>
                    <InfoItem active={openActive} number={this.props.data.open} title="Open" />
                </NavLink>
                <NavLink to={`/${this.props.id}?id=${this.props.id}&branch=breaches`}>
                    <InfoItem active={breachesActive} number={this.props.data.breaches} title="Breaches" />
                </NavLink>
                <NavLink to={`/${this.props.id}?id=${this.props.id}&branch=warnings`}>
                    <InfoItem active={warningsActive} number={this.props.data.warnings} title="Warnings" />
                </NavLink>
                <InfoItem efficiencyClasses={efficiencyClasses} number={`${Math.trunc(this.props.data.efficiency)}%`} title="Efficiency" />
            </div>
        );
    }
}