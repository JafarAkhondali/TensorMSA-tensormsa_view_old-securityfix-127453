import React from 'react'
import Api from './utils/Api'
import ReportRepository from './repositories/ReportRepository'
import NN_HeaderComponent from './NNLayout/NN_HeaderComponent'
import NN_SectionComponent from './NNLayout/NN_SectionComponent'
import NN_FooterComponent from './NNLayout/NN_FooterComponent'

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
                        tableData : null,
                        NN_InfoList : null
                     };
        this.getJson = this.getJson.bind(this);
    }

    getJson(params){
           this.props.reportRepository.getJsonTestData(params).then((tableData) => {
                this.setState({tableData: tableData})
            });
    }

    render() {
        return (
            <div>
				<NN_HeaderComponent/>
				<NN_SectionComponent NN_InfoList={this.state.NN_InfoList} tableData={this.state.tableData}/>
				<NN_FooterComponent/>
			</div>
        )
    }
}

HomeComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};