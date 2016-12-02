import React from 'react'

export default class SpinnerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let spinnerIcon = null;
        let spinnerContent = null;
        if(this.props.flag){
            spinnerIcon = <div className="loading"></div> 
            spinnerContent = <div id="loading-text">Loading</div>
        }else{
            spinnerIcon = null
            spinnerContent = null 
        }

        return(
            <div class="loading-container">
               {spinnerIcon}
               {spinnerContent}
            </div>
        );
    }
}