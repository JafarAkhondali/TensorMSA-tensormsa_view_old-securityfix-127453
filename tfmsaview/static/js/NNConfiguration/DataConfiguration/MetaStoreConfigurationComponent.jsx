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
        this.c_tableName = null;
        this.state = {  
                MetaStore_TableLayout : null,
                WdnnTableData : null,
                WdnnTableColumnType:null,
                dataFormatTypes : {},
                selModalView : null,
                uploadFileList : [],
                tableRows : null,
                dataBaseList : null,
                databaseName : null,
                tableList : null,
                tableName : null,
                nnid : null
                };
                        
            //this.addDataframeType = this.addDataframeType.bind(this, param);                 
    }
    //when page called on first 
    componentDidMount(){
        this.getDataBaseOnDataConfig();
        this.setState({nnid: this.context.NN_ID})
        console.log(this.state.dataBaseList)
        
    }
        // combine get rest api url 
    get_searchUrl(){
        return "base/" + this.state.databaseName + "/table/" ;
    }
    search_btn(params){
        let limit_cnt = {}
        limit_cnt["limits"] = 0
        //let url = '/api/v1/type/dataframe/base/scm/table/tb_data_cokes100/data/'
        let opt_url =  this.state.databaseName + '/table/' + this.c_tableName + '/data/'
        this.props.reportRepository.getWdnnTableDataFromHbase(opt_url).then((tableData) => {
            console.log('data configuration search end')
        this.setState({WdnnTableData: tableData['result']})
        });
        this.props.reportRepository.getDataFrameOnNetworkConfig().then((resultData) => {
             console.log('dataframepost results end');
             this.setState({WdnnTableColumnType: resultData['result']},function(){this.refs.child.setWdnnTableColumnType()});
             // for (let[k,v] of Object.entries(resultData['result'])){
             //     console.log(k); 
             //     console.log(v);
             // }
        });
        //this.refs.child.setWdnnTableColumnType();
        console.log('dataframepost results end')
        //this.getDataFrameType()
    }
    // getDataFrameType () {
    //     let results = {};
    //     console.log("getDataFrameType")
        
    //     this.props.reportRepository.getDataFrameOnNetworkConfig().then((resultData) => {
    //         console.log('dataframepost results end')
    //         this.setState({WdnnTableColumnType: resultData['result']})
    //         //results = resultData['result']
    //     });
    // }
    child_dataframe_format_post_btn(params){
        //this.props.MetaStore_TableLayout.
        console.log('child')
        console.log(this.state.databaseName)
        console.log(this.c_tableName)
        console.log(this.state.nnid)

        let opt_url =  this.state.databaseName + '/table/' + this.c_tableName + '/format/' + this.state.nnid + '/'
        console.log(opt_url)

        this.refs.child.dataFramePost(opt_url)
    }
    child_check_Column_dataType(){
         this.refs.child.getDataFrameType()
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
        for (let tableNameValue of table_list['result']){
            option.push(<option key={i++} value={tableNameValue}>{tableNameValue}</option>)
        }
        this.setState({tableList : option})
        });
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("shouldComponentUpdate: " + this.state.databaseName + "nextstats ---> " + nextState ) ;
    //     console.log(nextState)
    //     return true;
    // }
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
        //let selectedDatabaseName = this.state.databaseName
        this.setState({databaseName: obj.target.value}, function(){this.getTableListOnDataConfig()});
        console.log("setDataBaseOnDataConfig")
        console.log(this.state.databaseName)
        
    }
    setTableListOnDataConfig(obj)
    {
        console.log(obj.target.value)
        let selectedtb = obj.target.value
        //let selectedTablename = this.state.tablename
        //this.setState({tablename: selectedtb, function(){render()}});
        this.c_tableName = obj.target.value 
        //c_tableName =  obj.target.value
        console.log(this.c_tableName)
    }
    wdnnconfPost(opt_url){
        console.log("dataframpost")
        this.props.reportRepository.postWdnnConf().then((resultData) => {
            console.log('dataframepost results')
            this.setState({dataFramePost: resultData['result']})
        });
    }
    wdnnTrainPost(opt_url){
        console.log("wdnnTrainPost")
        this.props.reportRepository.postWdnnTrain().then((resultData) => {
            console.log('dataframepost results')
            this.setState({dataFramePost: resultData['result']})
        });
    }





    render() {
        return (
                       <div className="container tabBody">
                            <div id="tab1">
                                <article>
                                <div className="inner-btnArea">
                                <button type="button" onClick={() => this.search_btn()} className="img-btn save">Search</button>
                                                {this.state.tableName}
                                                <button type="button" onClick={() => this.child_dataframe_format_post_btn(this)} className="img-btn save">Format Save</button>
                                                <button onClick={this.openModal.bind(this ,'table')}>Upload</button>
                                                <button type="button" className="img-btn save" onClick = {() => this.wdnnconfPost()}>wdnn conf</button>
                                                <button type="button" className="img-btn save" onClick = {() => this.wdnnTrainPost()}>wdnn train</button>
                                </div>
                                    <table className="form-table align-left">
                                        <colgroup>
                                            <col width="10%"/>
                                            <col width="10%"/>
                                            <col width="10%"/>
                                            <col width="10%"/>
                                            <col width="60%"/>
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
                                                {this.state.tableName}
                                                <button type="button" onClick={() => this.child_dataframe_format_post_btn(this)} className="img-btn save">Format Save</button>
                                                <button onClick={this.openModal.bind(this ,'table')}>Upload</button>
                                                <button type="button" className="img-btn save" onClick = {() => this.wdnnconfPost()}>wdnn conf</button>
                                                <button type="button" className="img-btn save" onClick = {() => this.wdnnTrainPost()}>wdnn train</button>
                                                <button type="button" className="btn-sm" onClick = {() => this.child_check_Column_dataType()}>get_type</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <MetaStore_TableLayout WdnnTableData={this.state.WdnnTableData} WdnnTableColumnType={this.state.WdnnTableColumnType} ref="child"/>
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

MetaStoreConfigurationComponent.contextTypes = {
    NN_ID: React.PropTypes.string
};