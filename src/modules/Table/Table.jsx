import React from 'react';
import _ from 'lodash';
import { Collapse } from 'react-collapse';

const JIRA = 'https://jira.sinclairstoryline.com:8443/browse/';

const TableTitle = ({title, count, onClick}) => (
    <div className="table-title" onClick={() => {onClick();}}>{count} {title}</div>
);

const TableHeader = (props) => {
    let headers = props.headers.map((header, index) => {
        let style = { width: props.widths[index]};
        return <th style={style} key={header} onClick={() => {props.toggleSort(header)}}>{header}</th>;
    });

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
};

const TableItem = ({item, widths}) => (
    <tr>
        <td style={{width: widths[0]}}>{item.station}</td>
        <td style={{width: widths[1]}}><a href={JIRA + item.id} target="_blank">{item.id}</a></td>
        <td style={{width: widths[2], textAlign: 'left'}}>{_.truncate(item.title, {length: 40})}</td>
        <td style={{width: widths[3]}}>{item.status}</td>
        <td style={{width: widths[4]}}>{Math.trunc(item.breaches[0].duration)}h</td>
        <td style={{width: widths[5], textAlign: 'left'}}>{item.breaches[0].name}</td>
        <td style={{width: widths[6]}}>{item.created}</td>
        <td style={{width: widths[7]}}>{item.assignee}</td>
    </tr>
);

const TableData = (props) => {
    return (
        <tbody>
            {props.data}
        </tbody>
    );
};

export default class Table extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            display: true,
            data: '',
            sortedData: '',
            desc: false,
            currentCategory: 'id',
            caret: 'caret-down'
        };

        this.toggleCollapse = ::this.toggleCollapse;
        this.handleSort = ::this.handleSort;
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.data.length > 0) {
            this.setState({
                data: nextProps.data
            }, () => {
                this.handleSort('id');
            });
        }
    }

    toggleCollapse () {
        this.setState({
            display: !this.state.display
        });
    }

    handleSort (category) {
        console.log(category);
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
        } else if (category === 'SLA') {
            sortedData = _.sortBy(this.state.data, (item) => {
                return item.breaches[0].name;
            });
        } else {
            sortedData = _.sortBy(this.state.data, category);
        }

        let tableList = sortedData.map((item, index) => {
            return <TableItem key={item.id + index} item={item} widths={this.props.widths} />
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
        return (
            <div className="table-container">
                <TableTitle title={this.props.title} count={this.props.data.length} onClick={this.toggleCollapse} />
                <Collapse isOpened={this.state.display}>
                    <table>
                        <TableHeader headers={this.props.headers} widths={this.props.widths} toggleSort={this.handleSort}/>
                        <TableData data={this.state.sortedData} widths={this.props.widths} />
                    </table>
                </Collapse>
            </div>
        )
    }
}