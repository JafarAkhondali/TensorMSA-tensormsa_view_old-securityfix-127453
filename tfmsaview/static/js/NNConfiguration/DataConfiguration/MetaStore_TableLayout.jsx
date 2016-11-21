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
            dataFramePost:null,
            selectdataFormatTypes:{},
            celStateHeaderSelectBoxValue:{},
            WdnnTableColumnType:{}
            };
        this.celHeaderSelectBoxValue = {};
        this.celHeaderSelectBoxValue2 = {};
        this.first_time = true;
    }
    // componentDidUpdate() {
    //     console.log("componentDidUpdatechild")
    //     if(!this.props.WdnnTableColumnType) {return null;}
    //     this.setState({celStateHeaderSelectBoxValue:this.props.WdnnTableColumnType})
    //     // Use Materialize custom select input
    //     calWdnnTableColumnType()
    //     //this.refs.s1.forceUpdate();
    // }
    setWdnnTableColumnType()
    {
            console.log("setWdnnTableColumnType  true")
            this.first_time = true;
    }
    calWdnnTableColumnType()
    {
        console.log("calWdnnTableColumnTypechild")
        if(!this.props.WdnnTableColumnType) {return null;}
        console.log("calWdnnTableColumnTypechild")
        let CalWdnnTableColumnType = {}
        for(let columnValuesType of this.props.WdnnTableColumnType){
            console.log(columnValuesType)
            //add colums

        }

    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
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
        //this.celHeaderSelectBoxValue[selectedValue.target.id]=selectedValue.target.value
        let _celHeaderSelectBoxValue = {}
        let _celHeaderSelectBox = {}
        _celHeaderSelectBoxValue["conlumn_type"] = selectedValue.target.value
        _celHeaderSelectBox[selectedValue.target.id] = _celHeaderSelectBoxValue
        this.setState({celStateHeaderSelectBoxValue:_celHeaderSelectBox})

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
        this.celHeaderSelectBoxValue2 = selectCellFeature;
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
        console.log(this.celHeaderSelectBoxValue)
	    //let key_set = Object.keys(this.state.cellfeature)
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
         //this.refs.s1.forceUpdate()
    }
    dataFramePost(opt_url){

        //error check assert
        console.log("dataframpost")
        this.props.reportRepository.postWdnnDataFrameFormat(opt_url,this.state.cellfeature).then((tableData) => {
            console.log('dataframepost results')
            this.setState({dataFramePost: tableData['result']})
        });
    }
    checkColumnDataType(){
        // Label이 하나만 있는가?
        // let flag = this.state.cellfeature.map(function(_labelExist){
        //     console.log(_labelExist)
        //     return _labelExist
        // })

        // return flag
        var numbers = [1, 4, 9];
        var dic_number = {"one":1, "two":2, "three":3}
        // var doubles = dic_number.map(i, function(num) {
        //     console.log(num)
        //     return num * 2;
        // });

        let flag = this.state.cellfeature
        console.log(flag)
        for (let [k, v] of Object.entries(flag)) {
            // do something with k and v
            console.log(k)
            console.log(v)
        } 

        //console.log(doubles)

    }
    getDataFrameType () {
        console.log("ChildGetDataFrameType"); 
        if (!this.props.WdnnTableColumnType) {return null;}
    	
        for (let[k,v] of Object.entries(this.props.WdnnTableColumnType)){
            console.log(k); 
            console.log(v);
            }
        
     }

    shouldComponentUpdate(nextProps, nextState){
        //console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }
//     getDataFrameType () {
//         let results = {};
//         console.log("getDataFrameType")
        
//         this.props.reportRepository.getDataFrameOnNetworkConfig().then((resultData) => {
//             console.log('dataframepost results')
//             // this.setState({selectdataFormatTypes: resultData['result']}, function(){
//             //          for (let[k,v] of Object.entries(this.state.selectdataFormatTypes)){
//             //              //console.log(k); 
//             //              //console.log(v);
//             //             }
                    
//             //     
//             this.setState({selectdataFormatTypes: resultData['result']})
//             results = resultData['result']
//             // debugger
//             for (let[k,v] of Object.entries(results)){
//                 console.log(k); 
//                 console.log(v);
//             }

//             //console.log(results["SI"]["column_type"])
          
//         //      for (let[k,v] of Object.entries(results)){
//         //                  console.log(k); 
//         //                  console.log(v);
//         //                 }
//         //  console.log( "asdasdasdasdasd")
//         //  console.log(results)
//         //  console.log( results.SI)
//         // //console.log( results['SI'][0])
//         //  console.log( results[0])
//         //  console.log( JSON.stringify(results))
//         // console.log( "asdasdasdasdasd  end")
                       
//         });
//         debugger
//         return results;
 
//         //console.log('what is SI')

//        // console.log(results['SI'])
        
//         //results[""]
//    // getColumnType = getDataFrameType();


//         //return resuts
//     }
    setWdnnTableColumnType()
    {
        console.log("setWdnnTableColumnType")
        //this.celHeaderSelectBoxValue = this.props.WdnnTableColumnType
        console.log(this.props.WdnnTableColumnType)
        console.log(this.celHeaderSelectBoxValue)
        
        //console.log(this.celHeaderSelectBoxValue["SI"]["column_type"])
        //this.setState({celStateHeaderSelectBoxValue:this.props.WdnnTableColumnType}) 

        this.props.reportRepository.getDataFrameOnNetworkConfig().then((resultData) => {
            console.log('dataframepost results end');
            this.setState({WdnnTableColumnType: resultData['result']});
            this.celHeaderSelectBoxValue = resultData['result'];
            console.log("setWdnnTableColumnType")
            // for (let[k,v] of Object.entries(resultData['result'])){
            //     console.log(k); 
            //     console.log(v);
            // }
        });
        
    }

    // getCategoryType(columnValues)
    // {
    //     let _celHeaderSelectBoxValue = {}
    //     let _celHeaderSelectBox = {}
        
    //     try{
    //         console.log("hasValue")
    //         console.log(columnValues)
    //         console.log(this.celHeaderSelectBoxValue)
    //         console.log(this.WdnnTableColumnType)
    //         //console.log(this.state.celStateHeaderSelectBoxValue)
    //         //debugger
    //        // console.log(this.state.celStateHeaderSelectBoxValue[columnValues])
    //         //console.log(this.props.WdnnTableColumnType[columnValues])
    //         _celHeaderSelectBoxValue["column_type"] = this.celHeaderSelectBoxValue[columnValues]["column_type"]
    //     }catch(e)
    //     {
    //         console.log("catch")
    //         console.log(columnValues)
    //        _celHeaderSelectBoxValue["column_type"] = "NONE"
    //     }
    //     _celHeaderSelectBox[columnValues] = _celHeaderSelectBoxValue
    //     this.celHeaderSelectBoxValue = _celHeaderSelectBox
    //     // for (let k of _celHeaderSelectBox){
    //     //     console.log("getCategoryType")
    //     //     console.log(k)
    //     // }

    //     console.log(_celHeaderSelectBox[columnValues])
    //     //return _celHeaderSelectBox[columnValues]
    //     return this.celHeaderSelectBoxValue[columnValues]
    // }
    getCategoryType2(WdnnTableColumnType)
    {
        let _celHeaderSelectBoxValue = {}
        let _celHeaderSelectBox = {}
        let _WdnnTableColumnType = {}
        console.log(this.first_time)
        if (this.first_time == true){
            console.log("WdnnTableColumnType true")
            _WdnnTableColumnType = WdnnTableColumnType
        }else{
            console.log("celHeaderSelectBoxValue false")
            _WdnnTableColumnType = this.celHeaderSelectBoxValue
        }

        // for(let [k,v] of Object.entries(_WdnnTableColumnType))
        // {
        //     console.log(k); 
        //     console.log(v);
        //     console.log("getCategoryType2");

        // }

        for(let columnValues of this.props.WdnnTableData[0])
        {
            try{
            console.log("hasValue")
            //console.log(columnValues)
            //console.log(this.celHeaderSelectBoxValue)
            //console.log(_WdnnTableColumnType[columnValues]["column_type"])
            //console.log(this.state.celStateHeaderSelectBoxValue)
            //debugger
           // console.log(this.state.celStateHeaderSelectBoxValue[columnValues])
            //console.log(this.props.WdnnTableColumnType[columnValues])
            _celHeaderSelectBoxValue["column_type"] = _WdnnTableColumnType[columnValues]["column_type"]
            }catch(e)
            {
                console.log("catch")
                console.log(columnValues)
            _celHeaderSelectBoxValue["column_type"] = "NONE"
            }
            _celHeaderSelectBox[columnValues] = _celHeaderSelectBoxValue

        }
        this.celHeaderSelectBoxValue = _celHeaderSelectBox
        //let sdfsdsdsf = this.props.WdnnTableData[0]
        //console.log("wddtabledata")
        //console.log(sdfsdsdsf)

        //this.celHeaderSelectBoxValue = _celHeaderSelectBox
        // for (let k of _celHeaderSelectBox){
        //     console.log("getCategoryType")
        //     console.log(k)
        // }

       // console.log(_celHeaderSelectBox[columnValues])
        //return _celHeaderSelectBox[columnValues]
        this.first_time =false
        console.log("it should be false")
        console.log(this.first_time)
        return this.celHeaderSelectBoxValue
    }
    getCategoryType3(WdnnTableColumnType)
    {
        let _celHeaderSelectBoxValue = {}
        let _celHeaderSelectBox = {}
        let _WdnnTableColumnType = {}
        console.log(this.first_time)
        if (this.first_time == true){
            console.log("WdnnTableColumnType true")
            _WdnnTableColumnType = this.props.WdnnTableColumnType
        }else{
            console.log("celHeaderSelectBoxValue false")
            _WdnnTableColumnType = this.celHeaderSelectBoxValue
        }

        this.first_time =false
        console.log("it should be false")
        console.log(this.first_time)
        this.celHeaderSelectBoxValue2 = _WdnnTableColumnType 
        return this.celHeaderSelectBoxValue2
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

        let noneSelected = null;
        let cateSelected = null;
        let contiSelected = null;
        let labelSelected = null;
        let getColumnType = {};
        console.log("wdddtablecolumnType")
        console.log(this.props.WdnnTableColumnType)
        //뭔가 한번만
        //this.celHeaderSelectBoxValue2 = this.props.WdnnTableColumnType
        this.getCategoryType3(this.props.WdnnTableColumnType)
        //console.log("#############################################")
        //console.log(this.celHeaderSelectBoxValue)


        //getColumnType =    this.getDataFrameType()


		for(let rows of this.props.WdnnTableData){

            let celHeaderCategory = [];
            let celHeader = [];
            let celData = [];
			for(let columnValues of rows){
                //add colums
                if( j==0 ){
                    let celHeaderCategoryTypeNone = [];
                    let celHeaderCategoryTypeConti = [];
                    let celHeaderCategoryTypeCate = [];
                    let celHeaderCategoryTypelabel = [];
                    //this.setState({celStateHeaderSelectBoxValue : null})
                    //this.celHeaderSelectBoxValue = {};
                    //let celHeaderSelectBoxValue = {};
                    // console.log(columnValues)
                    // try{
                    //     console.log(this.props.WdnnTableColumnType[columnValues]["column_type"])
                    // }catch(e)
                    // {
                    //     console.log("catch")
                    //     console.log(this.props.WdnnTableColumnType[columnValues])
                    // }   

                    // //column_type       
                    //column_type
                    //this.celHeaderSelectBoxValue = this.props.WdnnTableColumnType
                    // try{                        
                    //     if("CONTINUOUS"==this.props.WdnnTableColumnType[columnValues]["column_type"]){
                    //         console.log("RendercontiSelected")
                    //         this.celHeaderSelectBoxValue[columnValues] = "CONTINUOUS"
                    //     }else if("CATEGORICAL"==this.props.WdnnTableColumnType[columnValues]["column_type"]){
                    //         console.log("RendercateSelected")
                    //         this.celHeaderSelectBoxValue[columnValues] = "CATEGORICAL"
                    //     }else if("LABEL"==this.props.WdnnTableColumnType[columnValues]["column_type"]){
                    //         console.log("RenderlabelSelected")
                    //         this.celHeaderSelectBoxValue[columnValues] = "LABEL"            
                    //     }
                    // }catch(e)
                    // {
                    //     console.log("catch")
                    //     this.celHeaderSelectBoxValue[columnValues] = "NONE"

                    // } 

                    // try{                        
                    //     if("CONTINUOUS"==this.celStateHeaderSelectBoxValue[columnValues]["column_type"]){
                    //         console.log("RendercontiSelected")
                    //         this.celHeaderSelectBoxValue[columnValues] = "CONTINUOUS"
                    //     }else if("CATEGORICAL"==this.celStateHeaderSelectBoxValue[columnValues]["column_type"]){
                    //         console.log("RendercateSelected")
                    //         this.celHeaderSelectBoxValue[columnValues] = "CATEGORICAL"
                    //     }else if("LABEL"==this.celStateHeaderSelectBoxValue[columnValues]["column_type"]){
                    //         console.log("RenderlabelSelected")
                    //         this.celHeaderSelectBoxValue[columnValues] = "LABEL"            
                    //     }
                    // }catch(e)
                    // {
                    //     console.log("catch")
                    //     this.celHeaderSelectBoxValue[columnValues] = "NONE"

                    // } 


                     celHeaderCategory.push(    <td key={k++}>
                                                    <div className="option-select">
                                                    <select ref="s1" onChange={this.handleChange.bind(this)}
                                                            id={columnValues} defaultValue={this.celHeaderSelectBoxValue2[columnValues]["column_type"]} >
                                                       <option value="NONE">None</option>
                                                       <option  value="CATEGORICAL">Category Type</option>
                                                       <option value="CONTINUOUS">Continuous Type</option>
                                                       <option  value="LABEL">Label</option>
                                                    </select>
                                                    </div>
                                                </td>)

                    // celHeaderCategory.push(    <td key={k++}>
                    //                                 <div className="option-select">
                    //                                 <select onChange={this.handleChange.bind(this)}
                    //                                         id={columnValues} >   
                    //                                     {celHeaderCategoryTypeNone}
                    //                                     {celHeaderCategoryTypeConti}
                    //                                     {celHeaderCategoryTypeCate}
                    //                                     {celHeaderCategoryTypelabel}
                    //                                 </select>
                    //                                 </div>
                    //                             </td>)
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
