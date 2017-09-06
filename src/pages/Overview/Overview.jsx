import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class OverviewItem extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            efficiency: '',
            efficiencyClasses: ''
        };

        this.calculateEfficiency = ::this.calculateEfficiency;
    }

    calculateEfficiency () {
        let efficiency = this.props.data.efficiency;
        let isNum = typeof efficiency === 'number';

        // TODO: This is not currently being used. Possibly remove it later down the road.
        let parentClasses = classNames(
            'category',
            this.props.className
        );

        let efficiencyClasses = classNames(
            'efficiency',
            {
                danger: isNum ? efficiency <= 80 : false,
                warning: isNum ? efficiency > 80 && efficiency < 90 : false,
                boost: isNum ? efficiency > 100 : false
            }
        );

        if (isNum) {
            efficiency = `${Math.trunc(efficiency)}%`;
        }

        this.setState({
            efficiency,
            efficiencyClasses
        });
    }

    componentDidMount () {
        this.calculateEfficiency();
    }

    render () {
        return (
            <tr className="category">
                <td className="name"><Link to={{pathname: '/' + this.props.data.id, search: '?id=' + this.props.data.id + '&branch=open_requests'}}>{this.props.data.name}</Link></td>
                <td className="open"><Link to={{pathname: '/' + this.props.data.id, search: '?id=' + this.props.data.id + '&branch=open_requests'}}>{this.props.data.open}</Link></td>
                <td className="breaches"><Link to={{pathname: '/' + this.props.data.id, search: '?id=' + this.props.data.id + '&branch=breaches'}}>{this.props.data.breaches}</Link></td>
                <td className="warnings"><Link to={{pathname: '/' + this.props.data.id, search: '?id=' + this.props.data.id + '&branch=warnings'}}>{this.props.data.warnings}</Link></td>
                <td className={this.state.efficiencyClasses}>{this.state.efficiency}</td>
            </tr>
        );
    }
}

export default class Overview extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            data: []
        };

        this.headers = {
            name: "",
            id: "header",
            open: "Open",
            breaches: "Breaches",
            warnings: "Warnings",
            efficiency: "Efficiency"
        };
    }

    componentDidMount () {
        Axios.get('/data/all').then((response) => {
            this.setState({ data: response.data });
        });
    }

    render () {
        let Categories = this.state.data.map((val) => {
            return (<OverviewItem key={val.id} data={val} />);
        });

        return (
            <div className="container">
                <div className="content">
                    <table className="section request-type-list">
                        <tbody>
                        <OverviewItem key={this.headers.id} data={this.headers} className="headers" />
                        {Categories}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
