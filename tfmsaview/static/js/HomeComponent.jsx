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
            <div>

<header className="mainHeader">
	<h1 className="logo">
		<span className="hidden">tensor MSA</span>
	</h1>

	<nav>
		<h1 className="hidden">네비게이터</h1>
		<ul>
			<li><a href="#">Net Info</a></li>
			<li><a href="#">Data</a></li>
			<li><a href="#">Net conf</a></li>
			<li><a href="#">Train Statistics</a></li>
			<li><a href="#">Predict Test</a></li>
		</ul>
	</nav>
	
	<dl className="utilMenu">
		<dt>유틸메뉴</dt>
		<dd><a href="#">도움말</a></dd>
		<dd><a href="#">로그아웃</a></dd>
		<dd><a href="#"><span>홍길동</span>님 환영합니다!</a></dd>
	</dl>
</header>

<main>
	<section>
		<h1 className="hidden">tensor MSA main table</h1>
		<div className="searchArea">
			<label className="bullet" for="Name">Name</label>
			<input type="text" name="Name" placeholder="Name" />

			<label className="bullet" for="Name2">Name2</label>
			<input type="text" name="Name2" placeholder="Name" />

			<button className="btn-sm" type="button">search</button>
		</div>

		<div className="container paddingT10">
			<div className="tblBtnArea">
				<button type="button">Add New</button>
				<button type="button">Delete</button>
				<button type="button">Modify</button>
				<button type="button">Detail</button>
				<button type="button">Tensor Board</button>
				<button type="button">Prev</button>
				<button type="button">Next</button>
			</div>
			

			<article>
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>그룹</th>
							<th>타입</th>
							<th>제목</th>
							<th>ID</th>
							<th>설명</th>
							<th>Data</th>
							<th>Conf</th>
							<th>정합성</th>
							<th>Train</th>
							<th>정확도</th>
						</tr>
					</thead>
					<tbody>
						<td>111</td>
						<td>MES</td>
						<td>CNN</td>
						<td>1냉연</td>
						<td>01</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tbody>
				</table>
                <div>
                <button className="testJson" onClick={() => this.getJson()}> Test JSON Table</button>
                </div>
                <div>
                Test NN Start
                    {this.state.NN_InfoList}
                </div>
                <div className="jsonTestTable">
                    <PersonalDataTableComponent tableData={this.state.tableData} />
                </div>
                <div className="displayAPI">
                    {this.state.data}
                </div>
			</article>
		</div>


	</section>
</main>


<footer>
</footer>


</div>

        )
    }
}

HomeComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};