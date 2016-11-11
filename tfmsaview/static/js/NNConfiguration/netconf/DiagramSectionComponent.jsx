import React from 'react'
import ReportRepository from './../../repositories/ReportRepository'
import Api from './../../utils/Api'
import TableSectionComponent from './TableSectionComponent';

export default class DiagramSectionComponent extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            nnConfigBasicInfoField : null,
            nnConfigFormatInfoField : null
        }
        this._getNetConfigBasicInfo = this._getNetConfigBasicInfo.bind(this);
        this._getNetConfigFormatInfo = this._getNetConfigFormatInfo.bind(this);
    }

    //1
    componentWillMount(){
        console.log("componentWillMount");
        this._getNetConfigBasicInfo('nn0000091');

    }

    componentDidMount(){
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
        return (this.state.nnConfigBasicInfoField !== null && this.state.nnConfigFormatInfoField === null);
    }    

    //4!
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate");
        if(this.state.nnConfigBasicInfoField !== null)
        {           
            this._getNetConfigFormatInfo(this.state.nnConfigBasicInfoField, 'nn0000091');
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

    render() {
        return (
            <section>
                <section id='netconf-diagram'>
                    <div id="main-part" className="l--page">
                        {/* Data Column */}
                        <div className="column data">
                            <h4>
                                <span>Data</span>
                            </h4>
                            <div className="ui-dataset">
                                <p>Which dataset do you want to use?</p>
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
                                <button className="basic-button" id="data-regen-button" title="Regenerate data">
                                    Regenerate
                                </button>
                            </div>
                        </div>

                        {/* Features Column */}
                        <div className='column features'>
                            <h4>Features</h4>
                            <p>Which properties do you want to feed in?</p>
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
                                        <path d="M12,30C5,20 2,15 12,0" markerEnd="url(#arrow)"/>
                                    </svg>
                                    <div className="label">
                                        This is the output from one <b>neuron</b>. Hover to see it larger.
                                    </div>
                                </div>
                                <div className="callout weights">
                                    <svg viewBox="0 0 30 30">
                                        <defs>
                                            <marker id="arrow" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse">
                                                <path d="M0,0 L5,2.5 L0,5 z" />
                                            </marker>
                                        </defs>
                                        <path d="M12,30C5,20 2,15 12,0" markerEnd="url(#arrow)"/>
                                    </svg>
                                    <div className="label">
                                        The outputs are mixed with varying <b>weights</b>, shown by the thickness of the lines.
                                    </div>
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
                            <h4>Output</h4>
                            <div className="metrics">
                                <div className="output-stats ui-percTrainData">
                                    <span>Test loss</span>
                                    <div className="value" id="loss-test"></div>
                                </div>
                                <div className="output-stats train">
                                    <span>Training loss</span>
                                    <div className="value" id="loss-train"></div>
                                </div>
                                <div id="linechart"></div>
                            </div>
                            <div id="heatmap"></div>
                            <div>
                                <div>
                                    {/* Gradient color scale */}  
                                    <div className="label">
                                    </div>
                                    <svg width="150" height="30" id="colormap">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#f59322" stopOpacity="1"></stop>
                                                <stop offset="50%" stopColor="#e8eaeb" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="#0877bd" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g className="core" transform="translate(3, 0)">
                                            <rect width="144" height="10"></rect>
                                        </g>
                                    </svg>
                                </div>
                                <br />
                                <div>
                                    <label className="ui-showTestData mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="show-test-data">
                                        <input type="checkbox" id="show-test-data" className="mdl-checkbox__input" defaultChecked/>
                                            <span className="mdl-checkbox__label label">Show test data</span>
                                    </label>
                                    <label className="ui-discretize mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="discretize">
                                        <input type="checkbox" id="discretize" className="mdl-checkbox__input" defaultChecked/>
                                            <span className="mdl-checkbox__label label">Discretize output</span>
                                    </label>
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