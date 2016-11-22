import React from 'react';
import StepArrowComponent from './../NNLayout/common/StepArrowComponent';
import LabelByChartComponent from './TrainStatic/LabelByChartComponent'
import TrainRealTimeChartComponent from './TrainStatic/TrainRealTimeChartComponent'
import ReportRepository from './../repositories/ReportRepository'
import Api from './../utils/Api'

export default class NN_TrainStaticComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                stepBack : 4,
                stepForward : 6
            };
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
                    <li><a href="#">Fully</a></li>
                    <div className="btnArea">
                        <button type="button" className="img-btn save">Save</button>
                        <button type="button" className="img-btn save">Error Check</button>
                        <button type="button" className="img-btn save">Train</button>
                        <StepArrowComponent getHeaderEvent={this.props.getHeaderEvent} stepBack={this.state.stepBack} stepForward={this.state.stepForward}/>
                    </div>
                </ul>
                 <div className="container tabBody">
                <div className="btnArea">
                        <button type="button" className="img-btn save" onClick={this.callWdnnTrain.bind(this)}>WDNN Train</button>
                        <button type="button" className="img-btn save" onClick={this.callWdnnEval.bind(this)}>WDNN  Eval</button>
                        <button type="button" className="img-btn save" onClick={this.callCnnTrain.bind(this)}>CNN Train</button>
                        <button type="button" className="img-btn save" onClick={this.callCnnEval.bind(this)}>CNN Eval</button>
                </div>
                    <article className="train">
                        <section className="train-result">
                            <div className="train-wrap-top">
                                <dl className="statistics">
                                    <dt><span className="circle-yellow">Train statistics</span></dt>
                                        <TrainRealTimeChartComponent />
                                    <dd></dd>
                                </dl>
                                <dl className="test-result">
                                    <dt><span className="circle-yellow">Test result</span></dt>
                                    <dd><span>80%</span></dd>
                                </dl>
                            </div>
                        </section>
                        <section className="graph">
                            <div className="train-wrap-bottom">
                                <LabelByChartComponent />
                            </div>
                        </section>
                    </article>
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
