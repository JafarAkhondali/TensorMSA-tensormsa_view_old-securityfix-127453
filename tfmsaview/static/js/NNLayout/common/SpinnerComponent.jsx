import React from 'react'

export default class SpinnerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let spinnerContent = null;
        if(this.props.flag){
            spinnerContent = <div className="loader">Loading...</div> 
        }else{
            spinnerContent = null
        }

        return(
            <div>
               {spinnerContent}
            </div>
        );
    }
}