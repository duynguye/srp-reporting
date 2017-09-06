import React from 'react';
import _ from 'lodash';
import Axios from 'axios';
import FontAwesome from 'react-fontawesome';

const JIRA = 'https://jira.sinclairstoryline.com:8443/browse/';

const OpenItem = ({data}) => (
    <tr>
        <td>{data.station}</td>
        <td><a href={JIRA + data.id} target="_blank">{data.id}</a></td>
        <td>{_.truncate(data.title, {length: 80})}</td>
        <td>{Math.trunc(data.breaches[0].duration)}h</td>
        <td>{data.status}</td>
        <td>{data.created}</td>
        <td>{data.assignee}</td>
    </tr>
);

export default class Warnings extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            data: '',
            sortedData: '',
            desc: false,
            currentCategory: 'id',
            caret: 'caret-down'
        };

        this.handleSort = ::this.handleSort;
    }

    componentDidMount () {
        let id = this.props.id;

        Axios(`/data/${id}/warnings`).then((response) => {
            this.setState({
                data: response.data
            });

            this.handleSort('id');
        });
    }

    handleSort (category) {
        let sortedData = '';
        let order = this.state.desc;

        if (category === this.state.currentCategory) {
            this.setState({
                desc: !order
            });

            order = !order;
        } else {
            this.setState({
                currentCategory: category,
                desc: true
            });
            order = true;
        }

        if (category === 'created') {
            sortedData = _.sortBy(this.state.data, (item) => {
                return new Date(item.created);
            });
        } else {
            sortedData = _.sortBy(this.state.data, category);
        }

        let tableList = sortedData.map((item, index) => {
            return <OpenItem key={item.id + index} data={item}/>
        });

        if (order) {
            tableList = tableList.reverse();
        }

        this.setState({
            sortedData: tableList
        });

        order ? this.setState({caret: 'caret-down'}) : this.setState({caret: 'caret-up'});
    }

    render () {
        let caret = <FontAwesome name={this.state.caret} />;

        return (
            <div className="warnings-container">
                <table>
                    <thead>
                    <tr>
                        <th onClick={() => {this.handleSort('station')}}>Station {this.state.currentCategory === 'station' ? caret : null}</th>
                        <th onClick={() => {this.handleSort('id')}}>ID {this.state.currentCategory === 'id' ? caret : null}</th>
                        <th onClick={() => {this.handleSort('title')}}>Title {this.state.currentCategory === 'title' ? caret : null}</th>
                        <th> </th>
                        <th onClick={() => {this.handleSort('status')}}>Status {this.state.currentCategory === 'status' ? caret : null}</th>
                        <th onClick={() => {this.handleSort('created')}}>Created {this.state.currentCategory === 'created' ? caret : null}</th>
                        <th onClick={() => {this.handleSort('assignee')}}>Assignee {this.state.currentCategory === 'assignee' ? caret : null}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.sortedData}
                    </tbody>
                </table>
            </div>
        );
    }
}