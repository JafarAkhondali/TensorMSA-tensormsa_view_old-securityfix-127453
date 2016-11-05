import React from 'react';

export default class MetaStoreConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                       <div className="container tabBody">
                            <div id="tab1">
                                <article>
                                    <table className="form-table align-left">
                                        <colgroup>
                                        <col width="150" />
                                        <col width="500" />
                                        <col width="150" />
                                        <col width="500" />
                                        </colgroup> 
                                        <tbody>
                                        <tr>
                                            <th>Data Base List</th>
                                            <td>
                                                <select>
                                                    <option value="1">Data Base List</option>
                                                    <option value="2"></option>
                                                </select>
                                            </td>
                                            <th>Table List</th>
                                            <td>
                                                <select>
                                                <option value="1">Table List</option>
                                                <option value="2"></option>
                                                </select>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table marginT10">
                                        <thead>
                                            <tr className="option-select">
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="option-select">
                                                    <select>
                                                    <option value="1">None</option>
                                                    <option value="2">Category Type</option>
                                                    <option value="3">Ranking Type</option>
                                                    <option value="4">Continuous Type</option>
                                                    </select>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <th>이름</th>
                                                <th>성별</th>
                                                <th>자소서 주요단어</th>
                                                <th>공모전</th>
                                                <th>학점</th>
                                                <th>전공</th>
                                                <th>자격증</th>
                                                <th>학교</th>
                                                <th>부서</th>
                                                <th>교과</th>
                                            </tr>
                                        </thead>
                                        <tbody className="center">
                                            <tr>
                                                <td>홍길동</td>
                                                <td>남</td>
                                                <td>미래,열정</td>
                                                <td>-</td>
                                                <td>3.5</td>
                                                <td>수학</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>A</td>
                                                <td>S</td>
                                            </tr>
                                            <tr>
                                                <td>홍길동</td>
                                                <td>남</td>
                                                <td>미래,열정</td>
                                                <td>-</td>
                                                <td>3.5</td>
                                                <td>수학</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>A</td>
                                                <td>S</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </article>
                            </div>
                        </div>
        )
    }
}