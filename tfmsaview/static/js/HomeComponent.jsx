import React from 'react'
import Api from './utils/Api'
import ReportRepository from './repositories/ReportRepository'
import PersonalDataTableComponent from './tables/PersonalDataTableComponent'
import NN_InfoListComponent from './NNConfiguration/NN_InfoListComponent'
import NN_BasicInfoComponent from './NNConfiguration/NN_BasicInfoComponent'

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
                        step : null,
                        data : null, 
                        tableData : null,
                        NN_InfoList : null
                     };
        this.addNewNNInfo = this.addNewNNInfo.bind(this);
    }

    componentWillMount(){
        this.setState({NN_InfoList: <NN_InfoListComponent addNewNNInfo={this.addNewNNInfo} step={this.state.step}/>});        
    }

    getJson(params){
           this.props.reportRepository.getJsonTestData(params).then((tableData) => {
                this.setState({tableData: tableData})
            });
    }

    addNewNNInfo(){
            this.setState({NN_InfoList: <NN_BasicInfoComponent/>});   
    }

    render() {
        return (
            <layout>
                <header>
                    TensorMSA Title Area
                </header>
                <div>
                <button className="testJson" onClick={() => this.getJson()}> Test JSON Table</button>
                </div>
                <div className="displayAPI">
                    {this.state.data}
                </div>
                <div className="jsonTestTable">
                    <PersonalDataTableComponent tableData={this.state.tableData} />
                </div>
                <nav>
                </nav>
                <section>
                    Test NN Start
                    {this.state.NN_InfoList}
                </section>
                <footer>Copy right TensorMSA
                </footer>
            </layout>
        )
    }
}

HomeComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};