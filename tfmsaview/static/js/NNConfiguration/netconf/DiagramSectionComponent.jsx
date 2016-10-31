import React from 'react'

export default class DiagramSectionComponent extends React.Component {
    render() {
        return (
            <section id='netconf-diagram'>
                <div id="main-part" className="l--page">
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
                                    Colors shows data, neuron and weight values.
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
        )
    }
}