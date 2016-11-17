import React from 'react';
import StepArrowComponent from './../NNLayout/common/StepArrowComponent'

export default class NN_NetworkConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
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
                        <StepArrowComponent />
                    </div>
                </ul>
                 <div className="container tabBody">
                    <article>
                        <dl className="layer-box">
                            <dt><span className="circle-blue">Input Layer</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="layer-box">
                            <dt><span className="circle-blue">Hidden Layer</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="layer-box">
                            <dt><span className="circle-blue">Output Layer</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="layer-box">
                            <dt><span className="circle-blue">Input Data Information</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="layer-box">
                            <dt><span className="circle-blue">Hidden Layer</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="layer-box">
                            <dt><span className="circle-blue">Output Layer</span></dt>
                            <dd>123</dd>
                        </dl>                       
                    </article>
                 </div>  
            </section>
        )
    }
}