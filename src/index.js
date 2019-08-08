import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay'
import './seasonDisplay.css'
import Spinner from './spinner';

// App Class as the root component of the Applicaiton
class App extends React.Component {
    // Constructor function to initialise state
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };
    }

    // Get Geolocation - setState() - upon mounting class Component
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message})
        );
    }

    // Conditionals extracted from Render() content
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } 
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner message="Please accept location request"/>; 
    } 

    // Render method returns JSX - requirement for a React Class
    render() {
        return (
            <div className="main-body">{this.renderContent()}</div>
        );

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));