import React from 'react';
import MetaStore_TableLayout from './MetaStore_TableLayout';
import ReportRepository from './../../repositories/ReportRepository';
import Api from './../../utils/Api';
import ModalViewTableCsvCreate from './ModalViewTableCsvCreate';
import Modal from 'react-modal';

export default class MetaStoreConfigurationComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {  
                MetaStore_TableLayout : null,
                WdnnTableData : null,
                dataFormatTypes:{},
                selModalView : null,
                uploadFileList : []
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
    openModal(type){
        console.log(type)
        if(type == 'table'){
            this.setState({selModalView : <ModalViewTableCsvCreate/>})
        }
        this.setState({open: true})
    }
      // close modal 
    closeModal () { this.setState({open: false}); }




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
                                                <button type="button" onClick={() => this.child_dataframe_format_post_btn()} className="btn-sm">Format Save</button>
                                                <button onClick={this.openModal.bind(this ,'table')}>Table</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    
                                    <MetaStore_TableLayout WdnnTableData={this.state.WdnnTableData} ref="child"/>
                                </article>
                                <Modal className="modal" overlayClassName="modal" isOpen={this.state.open}
                                        onRequestClose={this.closeModal}>
                                    <div className="modal-dialog modal-lg">{this.state.selModalView}
                                    <span className="modal-footer">
                                        <button onClick={this.closeModal}>Close</button>
                                    </span>
                                    </div>
                                </Modal>
                        
                            </div>
                        </div>
                      



        )
    }
}
MetaStoreConfigurationComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};
