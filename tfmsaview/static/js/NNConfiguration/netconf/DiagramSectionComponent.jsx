import React from 'react'
import ReportRepository from './../../repositories/ReportRepository'
import Api from './../../utils/Api'
import TableSectionComponent from './TableSectionComponent';

export default class DiagramSectionComponent extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            nnConfigBasicInfoField : null,
            nnConfigFormatInfoField : null,
            saveBtnClickFlag: false
        };

        this._getNetConfigBasicInfo = this._getNetConfigBasicInfo.bind(this);
        this._getNetConfigFormatInfo = this._getNetConfigFormatInfo.bind(this);
        this._getDataObject = this._getDataObject.bind(this);
        this._postNNNetConfigInfo = this._postNNNetConfigInfo.bind(this);
    }

    //1
    componentWillMount(){
        this._getNetConfigBasicInfo(this.context.NN_ID);

    }

    componentDidMount(){
        console.log("componentDidMount");
        const libScript = document.createElement("script");
        const tsScript = document.createElement("script");

        libScript.src = "../../../dist/lib.js";
        libScript.async = false;
        
        tsScript.src = "../../../dist/NetConf.js";
        tsScript.async = true;
       
        document.body.appendChild(libScript);
        document.body.appendChild(tsScript);
    }

    // 3!
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return (this.state.nnConfigBasicInfoField !== null && this.state.nnConfigFormatInfoField === null) || this.state.saveBtnClickFlag === true;
    }    

    //4!
    componentWillUpdate(nextProps, nextState){
         console.log("componentWillUpdate");
        if(this.state.nnConfigBasicInfoField !== null && this.state.saveBtnClickFlag === false)
        {           
            this._getNetConfigFormatInfo(this.state.nnConfigBasicInfoField, this.context.NN_ID);
        }   

        if(this.state.saveBtnClickFlag === true)
        {           
            this._postNNNetConfigInfo();
        }        
    }

    //2
    _getNetConfigBasicInfo(params) {
        this.props.reportRepository.getNetConfigBasicInfo(params).then((tableData) => {
            var nnConfigBasicInfoJson = JSON.parse(tableData);
            for(let i=0; i < nnConfigBasicInfoJson.result.length; i++) 
            {
                if(params === nnConfigBasicInfoJson.result[i].pk)
                {
                    this.setState({nnConfigBasicInfoField: nnConfigBasicInfoJson.result[i].fields});
                    break;
                }
            }               
        });
    }

    //5!
    _getNetConfigFormatInfo(params, nnid) {
        this.props.reportRepository.getNetConfigFormatInfo(params, nnid).then((tableData) => {
            var nnConfigFormatInfoJson = JSON.parse(tableData);
            this.setState({nnConfigFormatInfoField: nnConfigFormatInfoJson.result});
        });
    }    

    _getDataObject() {
        let dataObj = {}; 
        
        console.log(this.state.nnConfigBasicInfoField);
        dataObj.datalen = this.state.nnConfigFormatInfoField.x_size*this.state.nnConfigFormatInfoField.y_size;
        dataObj.taglen = JSON.parse(this.state.nnConfigBasicInfoField.datasets).length;
        dataObj.matrix = [this.state.nnConfigFormatInfoField.x_size,this.state.nnConfigFormatInfoField.y_size];
        dataObj.learnrate = 0.01;
        dataObj.label = JSON.parse(this.state.nnConfigBasicInfoField.datasets);
        dataObj.epoch = 10;

        return dataObj;
    }

    _isActive(value){
        return ((value===this.state.selected) ? 'current':'');
    }

    _clickSaveButton(){
        this.setState({saveBtnClickFlag: true});
    }

    _postNNNetConfigInfo(){
        console.log(this.context.NN_ID);
        let layerArray = [];
        let layerObj = {};
        let postObj = {};
        let propName;
        let propValue;

        // data json object 
        let dataObj = this._getDataObject();

        postObj.data = dataObj;
        
        // layer json array
        let domHiddenTable = document.getElementsByClassName('hidden_table');

        for(let i=0; i < domHiddenTable.length; i++)
        {
            var tr = (domHiddenTable[i]).querySelectorAll('#CNN1 > tbody > tr')

            for(let j=0; j < tr.length; j++)
            {
                if([0,1,7,8,9].indexOf(j) >= 0)
                {
                    propName = tr[j].querySelector('td:nth-child(1)').innerText;
                    propValue = tr[j].querySelector('td:nth-child(2) > input[type=text]').innerText;

                    layerObj[propName] = propValue;
                    
                }
                else {
                    propName = tr[j].querySelector('td:nth-child(1)').innerText;
                    propValue = new Array(tr[j].querySelector('td:nth-child(2) > input[type=text]').innerText);

                    layerObj[propName] = propValue;
                }
            }

            layerArray.push(layerObj);
        }

        postObj.layer = layerArray;
    }    

    render() {
        return (
            <section>
                <section id='netconf-diagram'>
                    <ul className="tabHeader">
                        <li className='current'><a href="#">CNN</a></li>
                        <div className="btnArea">
                            <button type="button" onClick={this._clickSaveButton.bind(this)}>Save</button>
                        </div>                        
                        <li><a href="#">WDND</a></li>
                    </ul> 
                        <div className="container tabBody">                 
                            <div id="main-part" className="l--page">
                                {/* Data Column */}
                                <div className="column data">
                                    <h4>
                                        <span>Data</span>
                                    </h4>
                                    <div className="ui-dataset">
                                        <div className="dataset-list">
                                            <div className="dataset" title="Circle">
                                                <canvas className="data-thumbnail" data-dataset="circle"></canvas>
                                            </div>
                                            <div className="dataset" title="Exclusive or">
                                                <canvas className="data-thumbnail" data-dataset="xor"></canvas>
                                            </div>
                                            <div className="dataset" title="Gaussian">
                                                <canvas className="data-thumbnail" data-dataset="gauss"></canvas>
                                            </div>
                                            <div className="dataset" title="Spiral">
                                                <canvas className="data-thumbnail" data-dataset="spiral"></canvas>
                                            </div>
                                            <div className="dataset" title="Plane">
                                                <canvas className="data-thumbnail" data-regDataset="reg-plane"></canvas>
                                            </div>
                                            <div className="dataset" title="Multi gaussian">
                                                <canvas className="data-thumbnail" data-regDataset="reg-gauss"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="ui-percTrainData">
                                            <label htmlFor="percTrainData">Ratio of training to test data:&nbsp;&nbsp;<span className="value">XX</span>%</label>
                                            <p className="slider">
                                                <input className="mdl-slider mdl-js-slider" type="range" id="percTrainData" min="10" max="90" step="10"/>
                                            </p>
                                        </div>
                                        <div className="ui-noise">
                                            <label htmlFor="noise">Noise:&nbsp;&nbsp;<span className="value">XX</span></label>
                                            <p className="slider">
                                                <input className="mdl-slider mdl-js-slider" type="range" id="noise" min="0" max="50" step="5"/>
                                            </p>
                                        </div>
                                        <div className="ui-batchSize">
                                            <label htmlFor="batchSize">Batch size:&nbsp;&nbsp;<span className="value">XX</span></label>
                                            <p className="slider">
                                                <input className="mdl-slider mdl-js-slider" type="range" id="batchSize" min="1" max="30" step="1"/>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Features Column */}
                                <div className='column features'>
                                    <div id="network">
                                        <svg id="svg" width="510" height="450">
                                            <defs>
                                                <marker id="markerArrow" markerWidth="7" markerHeight="13" refX="1" refY="6" orient="auto" markerUnits="userSpaceOnUse">
                                                    <path d="M2,11 L7,6 L2,2" />
                                                </marker>
                                            </defs>
                                        </svg> 
                                        <div id="hovercard">
                                            <div>Click anywhere to edit.</div>
                                            <div><span className="type">Weight/Bias</span> is <span className="value">0.2</span><span><input type="number" /></span>.</div>
                                        </div>
                                        <div className="callout thumbnail">
                                            <svg viewBox="0 0 30 30">
                                                <defs>
                                                    <marker id="arrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse">
                                                        <path d="M0,0 L5,2.5 L0,5 z" />
                                                    </marker>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="callout weights">
                                            <svg viewBox="0 0 30 30">
                                                <defs>
                                                    <marker id="arrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse">
                                                        <path d="M0,0 L5,2.5 L0,5 z" />
                                                    </marker>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>                        
                                </div>                        
                
                                {/* Hidden Layers Column */} 
                                <div className='column hidden-layers'>
                                    <h4>
                                        <div className="ui-numHiddenLayers">
                                            <button id="add-layers" className="mdl-button mdl-js-button mdl-button--icon">
                                                <i className="material-icons">add</i>
                                            </button>
                                            <button id="remove-layers" className="mdl-button mdl-js-button mdl-button--icon">
                                                <i className="material-icons">remove</i>
                                            </button>
                                        </div>
                                        <span id="num-layers"></span>
                                        <span id="layers-label"></span>
                                    </h4>
                                    <div className="bracket"></div>
                                </div>

                                {/* Output Column */}
                                <div className='column output'>
                                    <div className="metrics">
                                        <div className="output-stats ui-percTrainData">
                                        </div>
                                        <div className="output-stats train">
                                        </div>
                                        <div id="linechart"></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                {this.state.nnConfigBasicInfoField !== null && this.state.nnConfigFormatInfoField !== null &&
                    <TableSectionComponent nnConfigBasicInfoField={this.state.nnConfigBasicInfoField}
                                           nnConfigFormatInfoField={this.state.nnConfigFormatInfoField}
                    />
                }
            </section>
        )
    }
}

DiagramSectionComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
}

DiagramSectionComponent.contextTypes = {
    NN_ID: React.PropTypes.string
};