import React from 'react'

export default class MetaStore_TablePayout extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            selectValue:[],//initail lodaing is meta
            dataFormatTypes:{}
            };
    }
    handleChange(selectedValue){
        //console.log("lookup dictionary")
        //console.log(selectedValue.target)
        //console.log(selectedValue.target.id)
        //console.log(selectedValue.target.value)
        let selectDataFormatType = this.state.dataFormatTypes
        selectDataFormatType[selectedValue.target.id] = selectedValue.target.value
        //this.state.selectValue = 
        //this.setState({selectValue : selectedValue}) 
        this.setState({dataFormatTypes : selectDataFormatType})
        //this.setState({ this.props.: selectDataFormatType})
        //this.props.DataframeType
        //this.state.dataFormatType[selectedValue.target.id] = selectedValue.target.value
        //this.setState({dataFormatType[selectedValue.target.id]:selectedValue.target.value})
        //dataFormatType[selectedValue.target.id] = selectedValue.target.value
        //this.setState({selectValue:selectedValue})
        //console.log(this.state.dataFormatTypes)
	    let key_set = Object.keys(this.state.dataFormatTypes)
        for(let key of key_set){
            //console.log("lookup dictionary")
            //console.log(selectedValue.target.value)
            //console.log(key);
            console.log(key +"---->"+ this.state.dataFormatTypes[key]);
         }
    }
    dataFramePost(dataFrameValue){
        Json.strinthis.dataFormatTypes



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
                tableHeader.push(<tr key={j++}>{celHeaderCategory}</tr>)
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
                    <button type="button" onClick={() => this.dataFramePost()} className="btn-sm">Search</button>
					<table className="table marginT10">
						{rowssdfsdf}
					</table>
                    </div>
                    
        )
    }
}