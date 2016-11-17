import React from 'react'
import ReportRepository from './../../repositories/ReportRepository'
import Api from './../../utils/Api'

export default class MetaStore_TableLayout extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            selectValue:[],//initail lodaing is meta
            cellfeature:{},
            label:{},
            dataFormatTypes:{},
            dataFormatTypesLabel:{},
            dataFramePost:null
            };
    }

    
    handleChange(selectedValue){
        //console.log("lookup dictionary")
        //console.log(selectedValue.target)
        //console.log(selectedValue.target.id)
        //console.log(selectedValue.target.value)
        let selectDataFormatType = this.state.dataFormatTypes
        let selectDataFormatLabel = this.state.dataFormatTypesLabel
        let selectCellFeature = this.state.cellfeature
        let selectDataFormatTypeCell = {}
        //CONTINUOUS CATEGORICAL
        if ('CATEGORICAL' == selectedValue.target.value){
            console.log(selectedValue.target.value)
            selectDataFormatTypeCell['column_type'] = selectedValue.target.value
            selectDataFormatType[selectedValue.target.id] = selectDataFormatTypeCell
            this.setState({dataFormatTypes : selectDataFormatType})
        }
        if ('CONTINUOUS' == selectedValue.target.value){
            console.log(selectedValue.target.value)
            selectDataFormatTypeCell['column_type'] = selectedValue.target.value
            selectDataFormatType[selectedValue.target.id] = selectDataFormatTypeCell
            this.setState({dataFormatTypes : selectDataFormatType})
        }
        if ('LABEL' == selectedValue.target.value){
            console.log(selectedValue.target.value)
            selectDataFormatLabel[selectedValue.target.id] = selectedValue.target.value
            this.setState({dataFormatTypesLabel : selectDataFormatLabel})
        }
        selectCellFeature['cell_feature'] = selectDataFormatType
        selectCellFeature['label'] = selectDataFormatLabel
        this.setState({cellfeature : selectCellFeature}) 
        //this.state.selectValue = 
        //this.setState({selectValue : selectedValue}) 

        //this.setState({ this.props.: selectDataFormatType})
        //this.props.DataframeType
        //this.state.dataFormatType[selectedValue.target.id] = selectedValue.target.value
        //this.setState({dataFormatType[selectedValue.target.id]:selectedValue.target.value})
        //dataFormatType[selectedValue.target.id] = selectedValue.target.value
        //this.setState({selectValue:selectedValue})
        //console.log(this.state.dataFormatTypes)
        //JSON.stringify(params)
        console.log(JSON.stringify(selectCellFeature))
	    let key_set = Object.keys(this.state.cellfeature)
        //cell_feature

        // for(let key of key_set){
        //     console.log(key );
        //     for( let sub_key of key){
        //     //console.log("lookup dictionary")
        //     //console.log(selectedValue.target.value)
        //     //console.log(key);
        //         console.log(key + ":" +sub_key +"---->"+ this.state.cellfeature[key][sub_key]);
        //     }
         //}
    }
    dataFramePost(opt_url){
        console.log("dataframpost")
        this.props.reportRepository.postWdnnDataFrameFormat(opt_url,this.state.cellfeature).then((tableData) => {
            console.log('dataframepost results')
            this.setState({dataFramePost: tableData['result']})
        });
    }

    render() {
    	if (!this.props.WdnnTableData) {return null;}
    	
    	console.log("calling MetaStore_Table")
        let rowssdfsdf = [];
    	let i=0;
        let j=0;
        let k=0;
        //let tableHeaderCategory = []; //make Category
        let tableHeader = []; //make header
        let tableData = []; // make tabledata

		for(let rows of this.props.WdnnTableData){
            let celHeaderCategory = [];
            let celHeader = [];
            let celData = [];
			for(let columnValues of rows){
                //add colums
                if( j==0 ){
                    celHeaderCategory.push(    <td key={k++}>
                                                    <div className="option-select">
                                                    <select onChange={this.handleChange.bind(this)}
                                                            id={columnValues} >
                                                        <option value="NONE">None</option>
                                                        <option value="CATEGORICAL">Category Type</option>
                                                        <option value="CONTINUOUS">Continuous Type</option>
                                                        <option value="LABEL">Label</option>
                                                    </select>
                                                    </div>
                                                </td>)
                    celHeader.push(<th key={i++} > {columnValues}</th>)
                }else{
                    celData.push(<td key={i++} > {columnValues}</td>)
                }
			}
            //add rows
            if(j==0){
                tableHeader.push(<tr className="option-select" key={j++}>{celHeaderCategory}</tr>)
                tableHeader.push(<tr key={j++}>{celHeader}</tr>)
            }else{
                tableData.push(<tr key={j++}>{celData}</tr>)
            }
		}
        //add table 
        rowssdfsdf.push(<thead key={j++}>{tableHeader}</thead>)
        rowssdfsdf.push(<tbody key={j++} className="center">{tableData}</tbody>)
        
        return (   
            <div>
                <table className="table marginT10">
                    {rowssdfsdf}
                </table>
            </div>        
        )
    }
}
MetaStore_TableLayout.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};
