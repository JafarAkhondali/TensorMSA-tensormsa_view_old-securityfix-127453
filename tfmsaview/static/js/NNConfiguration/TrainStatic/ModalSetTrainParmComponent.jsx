import React from 'react'
import ReportRepository from './../../repositories/ReportRepository';
import Api from './../../utils/Api';

export default class ModalViewTrainParm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                networkId : null,
                labelRows : null,
                labelName : null
               
                };
    }

    //set label name on state variable
    setLabelName(obj){
        this.setState({labelName: obj.target.value});
    }

    postTrain(){
        this.props.reportRepository.postNeuralNetTrain(this.props.parm.nnType, this.props.parm.nnId, "").then((data) => {
            this.props.afterTrainPost();
        });
    }

    setTrainParm(){
        alert("TODO")
    }

    searchBtn(){
        this.props.searchBtn(this.props.networkId);
        this.props.closeModal();
    }

    render() {
        return (   
            <div>
                <h1>Train Module</h1>
                
                <div className="container tabBody">
                    <div id="tab1">
                        <article>
                            <table className="form-table align-left">
                                <colgroup>
                                <col width="50" />
                                <col width="60" />
                                <col width="50" />
                                <col width="60" />
                                <col width="250" />
                                </colgroup> 
                                <tbody>
                                <tr>
                                    <th>BatchSize</th>
                                    <td>
                                        <input type="text" name="label_name" placeholder="label_name" 
                                        onChange={this.setLabelName.bind(this)} value={this.state.value} />
                                    </td>
                                    <th>RepeatTime</th>
                                    <td>
                                        <input type="text" name="label_name" placeholder="label_name" 
                                        onChange={this.setLabelName.bind(this)} value={this.state.value} />
                                    </td>
                                    <td>
                                        <button type="button" onClick={this.setTrainParm.bind(this)}>Save</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                </div>
                <span className="modal-footer">
                    <button onClick={this.postTrain.bind(this)}>Train</button>
                    <button onClick={this.props.closeModal}>Close</button>
                </span>
            </div>
        )
    }
} 

ModalViewTrainParm.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};