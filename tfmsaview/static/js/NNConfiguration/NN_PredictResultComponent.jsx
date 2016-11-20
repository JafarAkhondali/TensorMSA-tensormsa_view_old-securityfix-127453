import React from 'react'
import PredictResultCNNComponent from './PredictResult/PredictResultCNN'
import PredictResultWDNNComponent from './PredictResult/PredictResultWDNN'
import StepArrowComponent from './../NNLayout/common/StepArrowComponent'


export default class NN_PredictResultComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                PredictResultComponent : <PredictResultWDNNComponent/>,
                selected:'WDNN' //initail lodaing is WDNN
                };
    }

    setFilter(filter){
        this.setState({selected  : filter})
        if (filter == 'WDNN') {
           // return this.getTableData();
            return this.setState({PredictResultComponent  : <PredictResultWDNNComponent/>});
        }
        else{
            return this.setState({PredictResultComponent  : <PredictResultCNNComponent/>});
        }
    }

    

    isActive(value){
    return ((value===this.state.selected) ? 'current':'');
    }


    render() {
        return (
            <section>
                <h1 className="hidden">Network Configuration</h1>
                    <ul className="tabHeader">
                        <li className={this.isActive('WDNN')} onClick={this.setFilter.bind(this, 'WDNN')}><a href="#">WDNN</a></li>
                        <li className={this.isActive('CNN')} onClick={this.setFilter.bind(this, 'CNN')}><a href="#">CNN</a></li>
                    <div className="btnArea">
                        <StepArrowComponent />
                    </div>
                    </ul>
				    {this.state.PredictResultComponent}
            </section>
        )
    }
}