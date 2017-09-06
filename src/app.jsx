import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import queryString from 'query-string';

import config from './config.js';
import { Overview, Category, NotFound } from 'pages/index';
import { Header } from 'modules';
import AppContainer from './AppContainer';

class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
            category: '',
            branch: ''
		};

		this.handleChange = ::this.handleChange;
	}

	componentDidMount() {
        Axios.get('/data/all').then((response) => {
            this.setState({ data: response.data });

            // Check to see if the page has been refreshed.
            if (window.location.search) {
                let search = queryString.parse(window.location.search);

                this.state.data.map((item) => {
                    if (item.id === search.id) {
                        this.setState({
                            category: item.name,
                            branch: search.branch
                        });
                    }
                });
            }
        });
	}

    handleChange (location) {
	    let data = queryString.parse(location.search);

	    if (this.state.data) {
	        this.state.data.map((item) => {
	            if (item.id === data.id) {
                    this.setState({
                        category: item.name,
                        branch: data.branch
                    });
                }
            });
        }

        if (location.pathname === '/') {
	        this.setState({
                category: '',
                branch: ''
            })
        }
    }

	render() {
        let DynamicRoutes = '';

	    if (this.state.data) {
	        DynamicRoutes = this.state.data.map((element) => {
	           return (<Route key={element.id} path={`/${element.id}`} component={Category} />);
            });
        }

		return (
			<div className="app">
                <BrowserRouter>
                    <AppContainer handleChange={this.handleChange}>
                        <Header logo={config.logo} title={config.title} category={this.state.category} branch={this.state.branch} />
                        <Switch>
                            <Route exact path="/" component={Overview} />
                            {DynamicRoutes}
                            <Route component={NotFound} />
                        </Switch>
                    </AppContainer>
                </BrowserRouter>
			</div>
		);
	}
}

// Render the application
ReactDOM.render(
	<Application/>,
	document.getElementById('root')
);