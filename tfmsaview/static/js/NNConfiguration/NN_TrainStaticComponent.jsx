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
                        <dl className="data-box">
                            <dt><span className="circle-yellow">Data info</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="data-box">
                            <dt><span className="circle-yellow">Train Status</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="data-box">
                            <dt><span className="circle-yellow">TestResult</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="data-box clearB w100p hInherit marginT10">
                            <dt><span className="circle-green">Sample Data</span></dt>
                            <dd>
                                <table className="table w100p">
                                    <thead>
                                        <tr>
                                        <th>이름</th>
                                        <th>성</th>
                                        <th>자소서 주요단어</th>
                                        <th>공모전</th>
                                        <th>학점</th>
                                        <th>전공</th>
                                        <th>자격증</th>
                                        <th>학교</th>
                                        <th>부서</th>
                                        <th>예측</th>
                                        <th>실제</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>홍길동</td>
                                            <td>남</td>
                                            <td>미래,열정</td>
                                            <td>-</td>
                                            <td>3.5</td>
                                            <td>컴퓨터</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>A</td>
                                            <td>5</td>
                                            <td>A</td>
                                        </tr>
                                        <tr>
                                            <td>홍길동</td>
                                            <td>남</td>
                                            <td>미래,열정</td>
                                            <td>-</td>
                                            <td>3.5</td>
                                            <td>컴퓨터</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>A</td>
                                            <td>5</td>
                                            <td>A</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </dd>
                        </dl>
                    </article>
                 </div>  
            </section>
        )
    }
}

                       