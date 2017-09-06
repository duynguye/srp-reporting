import React from 'react';
import Axios from 'axios';
import queryString from 'query-string';

import { InformationBar, Open, Breaches, Warnings } from 'modules';

export default class Category extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            id: '',
            category: '',
            branch: '',
            data: '',
            open: 0,
            warnings: 0,
            breaches: 0,
            efficiency: 0,
            update: false
        }
    }

    componentDidMount () {
        let params = queryString.parse(this.props.location.search);
        let id = params.id;
        let category = params.branch;

        Axios('/data/all').then((response) => {
           response.data.map((item) => {
               if (item.id === id) {
                   this.setState({
                       category: item.name,
                       open: item.open,
                       breaches: item.breaches,
                       warnings: item.warnings,
                       efficiency: item.efficiency
                   });
               }
           });
        });

        this.setState({
            id: id,
            branch: category
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (!this.state.update) {
            this.setState({update: true});
        } else {
            let params = queryString.parse(this.props.location.search);
            let id = params.id;
            let branch = params.branch;

            if (branch !== prevState['branch']) {
                this.setState({
                    id: id,
                    branch: branch
                });
            }
        }
    }

    render () {
        let obwData = { open: this.state.open, breaches: this.state.breaches, warnings: this.state.warnings, efficiency: this.state.efficiency };

        return (
            <div className="category-container">
                <div className="category-container-inner">
                    <InformationBar id={this.state.id} category={this.state.category} branch={this.state.branch} data={obwData} />
                    { this.state.branch === 'open_requests' ? <Open id={this.state.id}/> : null }
                    { this.state.branch === 'breaches' ? <Breaches id={this.state.id}/> : null }
                    { this.state.branch === 'warnings' ? <Warnings id={this.state.id}/> : null }
                </div>
            </div>
        );
    }
}