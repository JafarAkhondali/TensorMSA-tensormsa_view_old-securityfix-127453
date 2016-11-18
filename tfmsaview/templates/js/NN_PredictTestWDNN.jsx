import React from 'react';
import StepArrowComponent from './../NNLayout/common/StepArrowComponent'

export default class NN_TrainStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1 className="hidden">Network Configuration</h1>
                <ul className="tabHeader">
                    <li className="current"><a href="#">CNN</a></li>
                    <li><a href="#">WDNN</a></li>
                    <div className="btnArea">
                        <StepArrowComponent />
                    </div>
                </ul>
                 <div className="container tabBody">
                 <div className="btnArea">
                        <button type="button" className="save">예측</button>
                    </div>
                    <article>
                        <table className="form-table">
                            <colgroup>
                            <col width="20%" />
                            <col width="30%" />
                            <col width="20%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Network ID</th>
                                    <td className="left">
                                        <select>
                                            <option>Data Base List</option>
                                        </select>
                                    </td>
                                    <th>제목</th>
                                    <td className="left">제목</td>
                                </tr>
                            </thead>
                        </table>
                        
                        <div className="result">
                           
                        </div>
                    </article>
                 </div>  
            </section>
        )
    }
}

                       