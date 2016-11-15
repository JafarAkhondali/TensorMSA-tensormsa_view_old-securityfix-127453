import React from 'react'

export default class SpinnerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="loader">Loading...</div>
        );
    }
}