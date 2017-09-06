import React from 'react';
import { withRouter } from 'react-router-dom';

class AppContainer extends React.Component {
    componentWillMount () {
        this.unlisten = this.props.history.listen((location, action) => {
            this.props.handleChange(location);
        });
    }

    componentWillUnmount () {
        this.unlisten();
    }

    render () {
        return (
            <div className="app-container">
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(AppContainer);