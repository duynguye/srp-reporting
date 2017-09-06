import React from 'react';
import Axios from 'axios';
import { Table } from 'modules';

export default class Breaches extends React.Component {
    constructor (props) {
        super(props);

        this.headers = ['station', 'id', 'title', 'status', '', 'SLA', 'created', 'assignee'];
        this.columnWidths = ['10%', '10%', '25%', '15%', '5%', '12%', '10%', '10%'];

        this.state = {
            progress: [],
            client: [],
            beyond: []
        }
    }

    componentDidMount () {
        let progress = [], client = [], beyond = [];

        Axios(`/data/${this.props.id}/breaches`).then((response) => {
            response.data.map((breach) => {
                if (breach.breaches[0].active) {
                    breach.breaches[0].client ? client.push(breach) : progress.push(breach)
                    return;
                }

                beyond.push(breach);
            });

            this.setState({
                progress: progress,
                client: client,
                beyond: beyond
            });
        });
    }

    render () {
        return (
            <div className="breaches-container">
                <Table title="In Progress" headers={this.headers} data={this.state.progress} widths={this.columnWidths} />
                <Table title="With Client" headers={this.headers} data={this.state.client} widths={this.columnWidths} />
                <Table title="Beyond Breach" headers={this.headers} data={this.state.beyond} widths={this.columnWidths} />
            </div>
        );
    }
}