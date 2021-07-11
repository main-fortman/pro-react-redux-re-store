import React from 'react';
import ErrorIndicator from '../error-indicator';



export default class ErrorBoundary extends React.Component {

    state = {
        error: false
    }

    static getDerivedStateFromError() {
        this.setState({error: true});
    }

    render() {
        return this.state.error ?
                 <ErrorIndicator/> :
                 this.props.children;
    }
}