import React from 'react'

// Loading Spinner for Geolocation wait time
const Spinner = (props) => {

    return (
            <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>

            <p></p>
        </div>

    );
    
}

// Spinner default props given no parsed props from App class 
Spinner.defaultProps = {
    message: "Loading ... "
};

export default Spinner;
