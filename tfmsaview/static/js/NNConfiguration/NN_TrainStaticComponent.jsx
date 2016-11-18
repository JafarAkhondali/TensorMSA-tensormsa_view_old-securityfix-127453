import React from 'react';
import StepArrowComponent from './../NNLayout/common/StepArrowComponent';
import LabelByChartComponent from './TrainStatic/LabelByChartComponent'
import ReportRepository from './../repositories/ReportRepository'
import Api from './../utils/Api'

export default class NN_TrainStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    callWdnnTrain(nnid){
        this.props.reportRepository.postWdnnTrain(this.context.NN_ID).then((data) => {
           // this.setState({data: data})
        });
    }

    callWdnnEval(nnid){
        this.props.reportRepository.postWdnnEval(this.context.NN_ID).then((data) => {
        //    this.setState({data: data})
        });
    }

    callCnnTrain(nnid){
        this.props.reportRepository.postCnnTrain(this.context.NN_ID).then((data) => {
      //      this.setState({data: data})
        });
    }

    callCnnEval(nnid){
        this.props.reportRepository.postCnnEval(this.context.NN_ID).then((data) => {
        //    this.setState({data: data})
        });
    }

    render() {
        return (
            <section>
                <h1 className="hidden">Network Configuration</h1>
                <ul className="tabHeader">
                    <li className="current"><a href="#">CNN</a></li>
                    <li><a href="#">RNN</a></li>
                        <StepArrowComponent />
                </ul>
                 <div className="container tabBody">
                <div className="btnArea">
                        <button type="button" className="img-btn save" onClick={this.callWdnnTrain.bind(this)}>WDNN Eval</button>
                        <button type="button" className="img-btn save" onClick={this.callWdnnEval.bind(this)}>WDNN Train</button>
                        <button type="button" className="img-btn save" onClick={this.callCnnTrain.bind(this)}>CNN Eval</button>
                        <button type="button" className="img-btn save" onClick={this.callCnnEval.bind(this)}>CNN Train</button>
                </div>
                    <LabelByChartComponent />
                 </div>  
            </section>
        )
    }
}

NN_TrainStaticComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};     

NN_TrainStaticComponent.contextTypes = {
    NN_ID: React.PropTypes.string
};
