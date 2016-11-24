import React from 'react';
import StepArrowComponent from './../NNLayout/common/StepArrowComponent';
import LabelByChartComponent from './TrainStatic/LabelByChartComponent'
import TrainRealTimeChartComponent from './TrainStatic/TrainRealTimeChartComponent'
import ReportRepository from './../repositories/ReportRepository'
import Api from './../utils/Api'

export default class NN_TrainStaticComponent extends React.Component {
    constructor(props) {
        super(props);
        this.historyData = [];
        this.threadFlag = false;
        this.state = {
                stepBack : 4,
                stepForward : 6,
                graphLoss : null,
                graphSummary : null,
                graphSummaryDetail : null,
                graphLabel : null
            };
    }

    componentDidMount(){
        this.getNeuralNetStat();
        this.threadFlag = true;
    }

    componentWillUnmount(){
        this.threadFlag = false;
    }


    checkNeuralNet(){
        this.props.reportRepository.postNeuralNetCheck(this.context.NN_ID, "").then((data) => {
      //      this.setState({data: data})
        });
    }

    trainNeuralNet(){
        this.props.reportRepository.postNeuralNetTrain(this.context.NN_TYPE, this.context.NN_ID, "").then((data) => {
           // this.setState({data: data})
        });
    }

    evalNeuralNet(){
        var params = {samplenum : '1' , samplemethod : 'random'}
        this.props.reportRepository.postNeuralNetEval(this.context.NN_TYPE, this.context.NN_ID, params).then((data) => {
        //    this.setState({data: data})
        });
    }

    getNeuralNetStat(){
        this.props.reportRepository.getNeuralNetStat(this.context.NN_ID).then((data) => { 
            if(this.threadFlag == true){
                this.renderGraphs(data);
                setTimeout(this.getNeuralNetStat.bind(this), 5000);    
            }
        });
    }

    renderGraphs(data){
        let labelData = data['detail']
        let lossData = data['loss']
        let summaryData = data['summary']
        let accuracy = Math.round(parseInt(summaryData['testpass'],10)/(parseInt(summaryData['testpass'],10) + parseInt(summaryData['testfail'],10)) * 100)
        let summatDetail = summaryData['testpass'] + "/" + (parseInt(summaryData['testfail']) + parseInt(summaryData['testpass']))

        console.log(labelData)
        this.setState({graphLoss : <TrainRealTimeChartComponent historyData={this.historyData} currData={lossData}/>})
        this.historyData = lossData;
        this.setState({graphLabel : <LabelByChartComponent data={labelData}/>})
        this.setState({graphSummary : <dd><span>{accuracy}%</span></dd>})
        this.setState({graphSummaryDetail : <dd><span>{summatDetail}</span></dd>})
    }


    render() {
        return (
            <section>
                <h1 className="hidden">Network Configuration</h1>
                <ul className="tabHeader">
                    <li className="current"><a href="#">{(this.context.NN_TYPE).toUpperCase()}</a></li>
                    <div className="btnArea">
                        <StepArrowComponent getHeaderEvent={this.props.getHeaderEvent} stepBack={this.state.stepBack} stepForward={this.state.stepForward}/>
                    </div>
                </ul>
                <div className="container tabBody">
                <div className="btnArea">
                    <button type="button" className="search" onClick={this.checkNeuralNet.bind(this)}>Error Check</button>
                    <button type="button" className="search" onClick={this.trainNeuralNet.bind(this)}>Train</button>
                    <button type="button" className="search" onClick={this.evalNeuralNet.bind(this)}>Eval</button>    
                    <button type="button" className="search" onClick={this.getNeuralNetStat.bind(this)}>Search</button>    
                </div>
                    <article className="train">
                        <section className="train-result">
                            <div className="train-wrap-top">
                                <dl className="statistics">
                                    <dt><span className="circle-yellow">Train Loss Graph</span></dt>
                                        {this.state.graphLoss}
                                    <dd></dd>
                                </dl>
                                <dl className="test-result">
                                    <dt><span className="circle-yellow">Train Summary Result</span></dt>
                                    {this.state.graphSummary}
                                    {this.state.graphSummaryDetail}
                                </dl>
                            </div>
                        </section>
                        <section className="graph">
                            <div className="train-wrap-bottom">
                                {this.state.graphLabel}
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
    NN_ID        : React.PropTypes.string,
    NN_TYPE      : React.PropTypes.string,
    NN_DATAVALID : React.PropTypes.string,
    NN_CONFIG    : React.PropTypes.string,
    NN_CONFVALID : React.PropTypes.string,
    NN_TRAIN     : React.PropTypes.string,
    NN_DATATYPE  : React.PropTypes.string
};