import React from 'react'
import PersonalDataTableComponent from './../tables/PersonalDataTableComponent'
import NN_InfoListComponent from './../NNConfiguration/NN_InfoListComponent'
import NN_BasicInfoComponent from './../NNConfiguration/NN_BasicInfoComponent'
import ReportRepository from './../repositories/ReportRepository'
import Api from './../utils/Api'

export default class NN_SectionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
        	            tableData : null,
                        NN_InfoList : null
                     };
        this.addNewNNInfo = this.addNewNNInfo.bind(this);
    }

    componentDidMount(){
        this.setState({NN_InfoList: <NN_InfoListComponent addNewNNInfo={this.addNewNNInfo}/>});        
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
					<main>
						<section>
							<h1 className="hidden">tensor MSA main table</h1>
							<div className="searchArea">
								<label className="bullet" for="Name">Name</label>
								<input type="text" name="Name" placeholder="Name" />
								<label className="bullet" for="Name2">Name2</label>
								<input type="text" name="Name2" placeholder="Name" />
								<button className="btn-sm" type="button" onClick={() => this.getJson()}>search</button>
							</div>
							<div className="container paddingT10">
					             {this.state.NN_InfoList}
								<article>
					            	<PersonalDataTableComponent tableData={this.state.tableData} />
								</article>
							</div>
						</section>
					</main>
        )
    }
}

NN_SectionComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};