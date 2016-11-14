import React from 'react';
import Api from './../utils/Api'
import ReportRepository from './../repositories/ReportRepository'

export default class NN_BasicInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                nn_id     : 'nn00009999',
                category  : null,
                subcate   : null,
                type      : null,
                name      : null,
                desc      : null               
                };
    }

    //set category name on state variable
    setCategory(obj){
        this.setState({category: obj.target.value});
    }

    //set subCategory on state variable
    setSubCategory(obj){
        this.setState({subcate: obj.target.value});
    }

    //set netWorkType on state variable
    setNetWorkType(obj){
        this.setState({type: obj.target.value});
    }

    //set netWorkType on state variable
    setTitle(obj){
        this.setState({name: obj.target.value});        
    }

    //set netWorkType on state variable
    setDescription(obj){
        this.setState({desc: obj.target.value});
    }

    get_nn_id(){
        return this.state.category + this.state.subcate + this.state.type + this.state.name;
    }
    // add user request new table
    postCommonNNInfo(){
        console.log("키는 : " + this.get_nn_id());
        //let keyValue = 'nn00009999';
        //this.setState({nn_id: keyValue});

        let requestUrl = "";
        //nninfoObj = new Object();
        //nninfoObj.nn_id = 'nn00009999';

        this.props.reportRepository.postCommonNNInfo(null, this.state).then((answer) => {
            
            
        });;
    }
    
    render() {
        return (
                <section>
                    <h1 className="hidden">tensor MSA main table</h1>
                    <ul className="tabHeader">
                        <li className="current"><a href="#">Network Basic Information</a></li>
                        <div className="btnArea">
                            <button type="button" className="img-btn uplode">Upload</button>
                            <button type="button" onClick={this.postCommonNNInfo.bind(this)}>Save</button>
                        </div>
                    </ul>   
                        <div className="container tabBody">
                            <div id="tab1">
                                <article>
                                    <table className="form-table align-left">
                                        <colgroup>
                                        <col width="250" />
                                        <col width="500" />
                                        <col width="250" />
                                        <col width="500" />
                                        </colgroup> 
                                        <tbody>
                                        <tr>
                                            <th>GROUP(Business Category)</th>
                                            <td>
                                                <select onChange={this.setCategory.bind(this)} value={this.state.value}>
                                                    <option value="1">category</option>
                                                    <option value="mes">MES</option>
                                                    <option value="scm">SCM</option>
                                                    <option value="erp">ERP</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select onChange={this.setSubCategory.bind(this)} value={this.state.value}>
                                                    <option value="1">subcategory</option>
                                                    <option value="m10">용선관제</option>
                                                    <option value="m11">제압관제</option>
                                                    <option value="m12">냉연관제</option>
                                                </select>
                                            </td>
                                            <th>Neural Network Type</th>
                                            <td>
                                                <select onChange={this.setNetWorkType.bind(this)} value={this.state.value}>
                                                <option value="1">Network Type</option>
                                                <option value="cnn">CNN</option>
                                                <option value="rnn">RNN</option>
                                                <option value="fully">Fully</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Title</th>
                                            <td colSpan="3"><input type="text" className="w100p" onChange={this.setTitle.bind(this)} value={this.state.value}></input></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4">
                                                <span className="label-blue positionA">Description</span>
                                                <textarea rows="30" className="w100p paddingT30" onChange={this.setDescription.bind(this)} value={this.state.value}></textarea>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </article>
                            </div>
                        </div>
                </section>
        )
    }
}

NN_BasicInfoComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};