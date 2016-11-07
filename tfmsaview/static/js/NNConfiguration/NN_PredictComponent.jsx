import React from 'react';

export default class NN_PredictComponent extends React.Component {
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
                  
                    </div>
                </ul>
                 <div className="container tabBody">
                  
                 </div>  
            </section>
        )
    }
}

                       