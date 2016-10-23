import React from 'react'
import NN_InfoListComponent from './../NNConfiguration/NN_InfoListComponent'
import NN_BasicInfoComponent from './../NNConfiguration/NN_BasicInfoComponent'

export default class NN_SectionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
        	            tableData : null,
                        NN_InfoList : null
                     };
        this.addNewNNInfo = this.addNewNNInfo.bind(this);
    }

    componentDidMount(){
        this.setState({NN_InfoList: <NN_InfoListComponent addNewNNInfo={this.addNewNNInfo}/>});        
    }

    addNewNNInfo(){
            this.setState({NN_InfoList: <NN_BasicInfoComponent/>});   
    }

    render() {
        return (   
					<main>
					       {this.state.NN_InfoList}
					</main>
        )
    }
}
