import React from 'react';
import MetaStore_TableLayout from './MetaStore_TableLayout'
import ReportRepository from './../../repositories/ReportRepository'
import Api from './../../utils/Api'

export default class MetaStoreConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
          this.state = {  
                MetaStore_TableLayout : null,
                WdnnTableData : null,
                dataFormatTypes:{}
                };
                        
            //this.addDataframeType = this.addDataframeType.bind(this, param);                 
    }
    search_btn(params){
        let limit_cnt = {}
        limit_cnt["limits"] = 0
        this.props.reportRepository.getWdnnTableDataFromHbase().then((tableData) => {
            console.log('4')
        this.setState({WdnnTableData: tableData['result']})
        });
    }
    child_dataframe_format_post_btn(params){
        //this.props.MetaStore_TableLayout.
        console.log('child')
        this.refs.child.dataFramePost()
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
                                            <td>
                                                <button type="button" onClick={() => this.search_btn()} className="img-btn save">Search</button>
                                                <button type="button" onClick={() => this.child_dataframe_format_post_btn()} className="btn-sm">Search</button>
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
                                           
                                           <MetaStore_TableLayout WdnnTableData={this.state.WdnnTableData} ref="child"/>
                                
                                </article>
                            </div>
                        </div>
        )
    }
}
MetaStoreConfigurationComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};
