import React from 'react';
import PersonalDataTableComponent from './../tables/PersonalDataTableComponent'
import ReportRepository from './../repositories/ReportRepository'
import Api from './../utils/Api'
import NN_InfoListTableComponent from './../tables/NN_InfoListTableComponent'
import StepArrowComponent from './../NNLayout/common/StepArrowComponent'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import NN_BasicInfoComponent from './NN_BasicInfoComponent';
import Modal from 'react-modal';

function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}

const options = {
  afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
  mode: 'checkbox'
};

function onAfterSaveCell(row, cellName, cellValue){
  console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
  console.log("Thw whole row :");
  console.log(row);
}
var cellEditProp = {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
}

function signalFormatter(cell, row){
    let color;
    //console.log("row : " + row);
    //console.log("cell : " + cell);
    if(cell == 'Y') {
        color = "signal-lamp-green";
    }else {
        color = "signal-lamp-red";
    }

    //return '<i className=' + color + '></i> ' + cell;
    return `<i class='` + color + `'></i>`;
}

export default class NN_InfoListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            tableData : null,
            NN_TableData : null,
            selModalView : null
        }
    }

    getCommonNNInfo(params){
        this.props.reportRepository.getCommonNNInfo(params).then((tableData) => {
                this.setState({NN_TableData: tableData})
            });
    }

    NNButtonText(i) {
        switch (i) {
            case 0:
                return "add New";
            case 1:
                return "Delete";
            case 2:
                return "Modify";
            case 3:
                return "Detail";
            default:
                return "";
        }
    }
    NNClickEvent(i){
        switch (i) {
            case 0:
                this.props.addNewNNInfo(); //call parent function to render
            case 1:
                return "";
            case 2:
                return "";
            case 3:
                return "";
            default:
                return "";
        }
    }

    openModal(type){
        console.log(type)
        if(type == 'add New'){
            this.setState({selModalView : <NN_BasicInfoComponent/>})
        }
        this.setState({open: true})
    }
    // close modal 
    closeModal () { this.setState({open: false}); }

    
    render() {

        let result = [];

        if(this.state.NN_TableData != null) {
            for(var i in this.state.NN_TableData) {
                //console.log(this.state.NN_TableData[i].pk);
                this.state.NN_TableData[i].fields['key'] = this.state.NN_TableData[i].pk;
                result[i] = this.state.NN_TableData[i].fields;
            }
            //this.setState({currData: result});
            console.log(result);
        }
        return (
            <section>
                <h1 className="hidden">tensor MSA main table</h1>
                    <div className="searchArea">
                        <label className="bullet" htmlFor="Name">Name</label>
                        <input type="text" name="Name" placeholder="Name" />
                        <label className="bullet" htmlFor="Name2">Name2</label>
                        <input type="text" name="Name2" placeholder="Name" />
                        <button className="btn-sm" type="button" onClick={() => this.getCommonNNInfo()}>search</button>
                        <div className="btnArea">
                            <div className="PNBtn">
                                <button type="button" className="prev">Prev</button>
                                <button type="button" className="next">Next</button>
                            </div>
                        </div>
                    </div>
                <div className="container paddingT10">
                    <div className="tblBtnArea">
                        <button onClick={this.openModal.bind(this ,"add New")}>add New</button>
                        <button type="button" className="delete" onClick={this.NNClickEvent(1)}>
                            {this.NNButtonText(1)}
                        </button>
                        <button type="button" className="modify" onClick={this.NNClickEvent(2)}>
                            {this.NNButtonText(2)}
                        </button>
                        <button type="button" className="detail" onClick={this.NNClickEvent(3)}>
                            {this.NNButtonText(3)}
                        </button>
                    </div>
                </div>
                <div>
                    <BootstrapTable data={result} options={ options } cellEdit={cellEditProp}
                            striped={true}
                            hover={true}
                            condensed={true}
                            pagination={true}
                            selectRow={selectRowProp}
                            deleteRow={true}
                            search={true}>
                        <TableHeaderColumn isKey={true} dataField="key" width="100">ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="category" width="70">그룹</TableHeaderColumn>            
                        <TableHeaderColumn dataField="type" width="70">타입</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" width="100">제목</TableHeaderColumn>
                        <TableHeaderColumn dataField="desc" width="150">설명</TableHeaderColumn>
                        <TableHeaderColumn dataField="datavaild" width="50" editable={false}>Data</TableHeaderColumn>
                        <TableHeaderColumn dataField="config" width="50" editable={false} dataFormat={signalFormatter} dataAlign="center">Conf</TableHeaderColumn>
                        <TableHeaderColumn dataField="confvaild" width="50" editable={false}>정합성</TableHeaderColumn>
                        <TableHeaderColumn dataField="train" width="50" editable={false}>Train</TableHeaderColumn>
                        <TableHeaderColumn dataField="acc" width="80" editable={false}>정확도</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <div>
                    <Modal className="modal" overlayClassName="modal" isOpen={this.state.open}
                            onRequestClose={this.closeModal}>
                        <div className="modal-dialog modal-lg">{this.state.selModalView}
                            <span className="modal-footer">
                                <button onClick={this.closeModal}>Close</button>
                            </span>
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }
}

NN_InfoListComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};