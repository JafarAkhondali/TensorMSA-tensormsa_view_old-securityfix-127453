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
                        
                        <div className="predict-box-wrap">
                           <div className="predict-box-container">
                                <div className="predict-tit">
                                    <h1 className="circle-blue">Drag&#38;Drop</h1>
                                </div>
                                <div className="predict-tit">
                                    <h1 className="circle-blue">Result</h1>
                                </div>
                                
                                <div className="predict-box-body">
                                    <section className="drag-section">
                                        <div className="drag-img">여기에 이미지가 들어갑니다</div>
                                    </section>
                                    <section className="result-section">
                                        <div className="result-value"><span>결과</span></div>
                                    </section>
                                </div>
                           </div>
                        </div>
                    </article>
                 </div>  
            </section>
        )
    }
}

                       