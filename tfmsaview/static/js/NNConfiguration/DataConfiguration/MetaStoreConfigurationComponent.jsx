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
                dataFormatTypes : {},
                selModalView : null,
                uploadFileList : [],
                tableRows : null,
                dataBaseList : null,
                databaseName : null,
                tableList : null,
                tablename : null,
                nnid : "nn0000102"
                };
                        
            //this.addDataframeType = this.addDataframeType.bind(this, param);                 
    }
    //when page called on first 
    componentDidMount(){
        this.getDataBaseOnDataConfig();
        console.log(this.state.dataBaseList)
        
    }
        // combine get rest api url 
    get_searchUrl(){
        return "base/" + this.state.databaseName + "/table/" ;
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
        console.log(this.state.databaseName)
        console.log(this.state.tableName)
        console.log(this.state.nnid)
        this.refs.child.dataFramePost(this.state.databaseName,this.state.tableName,this.state.nnid)
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
        //get table list on seleceted base name
    getTableListOnDataConfig(){
        console.log("getTableListOnDataConfig")
        console.log(this.state.databaseName)
        //let requestUrl = this.get_searchUrl();
        this.props.reportRepository.getTableListOnDataConfig(this.state.databaseName).then((table_list) => {
        let option = [];
        let i=0;
        for (let tableName of table_list['result']){
            option.push(<option key={i++} value={tableName}>{tableName}</option>)
        }
        this.setState({tableList : option})
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + this.state.databaseName + "nextstats ---> " + nextState ) ;
        console.log(nextState)
        return true;
    }
        //get table list on seleceted base name
    getDataBaseOnDataConfig(){
        //let request
        this.props.reportRepository.getDataBaseOnDataConfig().then((database_list) => {
            let optionRows = [];
            let i=0;
            for (let dbName of database_list['result']){
                optionRows.push(<option key={i++} value={dbName}>{dbName}</option>)
            }
            this.setState({dataBaseList : optionRows})
        });
    }
    setDataBaseOnDataConfig(obj)
    {
        console.log(obj.target.value)
        let selectedDatabaseName = this.state.databaseName
        this.setState({databaseName: obj.target.value}, function(){this.getTableListOnDataConfig()});
        console.log("setDataBaseOnDataConfig")
        console.log(this.state.databaseName)
        
    }
    setTableListOnDataConfig(obj)
    {
        console.log(obj.target.value)
        //let selectedTablename = this.state.tablename
        this.setState({tablename: obj.target.value});
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
                                                <select onChange={this.setDataBaseOnDataConfig.bind(this)} >
                                                  <option key="default1">Database List</option>
                                                  {this.state.dataBaseList}  
                                                </select>
                                            </td>
                                            <th>Table List</th>
                                            <td>
                                                <select onChange={this.setTableListOnDataConfig.bind(this)}>
                                                <option key="default1">Table List</option>
                                                   {this.state.tableList}
                                                </select>
                                            </td>
                                            <td>
                                                <button type="button" onClick={() => this.search_btn()} className="btn-sm">Search</button>
                                                <button type="button" onClick={() => this.child_dataframe_format_post_btn()} className="img-btn save">Format Save</button>
                                                <button onClick={this.openModal.bind(this ,'table')}>Upload</button>
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
