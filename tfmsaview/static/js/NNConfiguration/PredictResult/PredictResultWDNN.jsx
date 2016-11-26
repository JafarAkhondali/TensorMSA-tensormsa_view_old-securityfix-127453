import React from 'react';
import FileUpload from 'react-fileupload';
import Table from 'react-json-table';
import DropzoneComponent from 'react-dropzone-component';
import Api from './../../utils/Api'
import ReportRepository from './../../repositories/ReportRepository'




export default class PredictResultWDNNComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result:' wdnn 결과',
            NN_TableData: null,
            selModalView: null,
            rows: [["ash1", "vm"],["ash", "vm"]],
                  settings : {
                      header: false
                                }  ,
            NN_ID : '',
            networkList: null,
            networkTitle: '',
            dropzoneConfig: {
            //    iconFiletypes: ['.jpg', '.png', '.gif'],
            //    showFiletypeIcon: true,
                postUrl: 'no-url'            
            }
        };
    }

    componentDidMount(){
        console.log("WDNN did mount!!!!")
        this.getNetworkList();
        console.log('NN_ID : ' + this.context.NN_ID)   

        
    }    

    updateResult(result) {
        var resultData = JSON.parse(JSON.parse(result));
        console.log('updateResult Called : ' + resultData);
        // this.setState({result: resultData});
        this.setState({rows: resultData});
    }

    setDropzone(dropzone) {
        console.log('setDropzone')
        console.log(dropzone)
        this.dropzone = dropzone
    }

    removeDropZoneFile() {
        if (this.dropzone.files.length > 1) {
            this.dropzone.removeFile(this.dropzone.files[0]);
        }
    }

    getNetworkList(){
        //let request
        this.props.reportRepository.getCommonNNInfo().then((network_list) => {
            let optionRows = [];
            let networkData = {};
            console.log(network_list)
            for (var i in network_list) {
                let networkId = network_list[i]['pk']
                if (network_list[i]['fields']['type'] == 'wdnn') {
                    optionRows.push(<option key={i} value={networkId}>{networkId}</option>)
                    networkData[networkId] = network_list[i]
                }
            }
            this.setState({networkList : optionRows})
            this.setState({NN_TableData: networkData})
            console.log('optionRows')
            console.log(optionRows)
            this.setNetwork(this.context.NN_ID);
        });
    }

    onNetworkChanged(e) {
        this.setNetwork(e.target.value)
    }

    setNetwork(networkId)
    {
        console.log('value : ' +  networkId)
        if (this.state.NN_TableData[networkId] == null) {
            networkId = Object.keys(this.NN_TableData)[0]
            console.log('first key : ' + networkId)
        }
        console.log(this.state.NN_TableData[networkId]['fields'])
        this.setState({NN_ID: networkId})
        this.setState({networkTitle: this.state.NN_TableData[networkId]['fields']['name']});
        this.setDropZoneUrl(networkId)
    } 

    setDropZoneUrl(networkId) {
        this.setState({dropzoneConfig: {
            //    iconFiletypes: ['.jpg', '.png', '.gif'],
                showFiletypeIcon: true,
                postUrl: 'http://52.78.19.96:8989/api/v1/type/wdnn/predict/mes_m00_wdnn_5424/'               
            }})     
    }   

    render() {
        var djsConfig = { 
            addRemoveLinks: false,
           // acceptedFiles: "image/jpeg,image/png,image/gif",
            dictDefaultMessage: '파일 여기'
         }
        var eventHandlers = { 
            init: (passedDropzone) => {
                this.setDropzone(passedDropzone)
            },
            success: (e, response) => {
                console.log(response);
                this.updateResult(response);
            },
            processing: (file) => {
                console.log('processing : ' )
                console.log(file);
            },
            addedfile: (file) => {
                console.log('addedfile : ')
                console.log(file)
                console.log(this.dropzone)
                this.removeDropZoneFile();
            }
        }

      //  var tableEventHandler = {
        var    onClickCell =  (e, col, row) => {
                console.log('column clicked!!!')
                console.log(col + " / " + row)
            }
      //  }
        

        return (
            <article>
         <div className="container paddingT10">
                <table className="form-table">
                    <colgroup>
                    <col width="20%" />
                    <col width="30%" />
                    <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Network ID</th>
                            <td className="left">
                                <select onChange={this.onNetworkChanged.bind(this)} value={this.state.NN_ID}>
                                    {this.state.networkList}  
                                </select>
                            </td>
                            <th>제목</th>
                            <td className="left">{this.state.networkTitle}</td>
                        </tr>
                    </thead>
                </table>
                <div className="form-table">
                    <div className="tblBtnArea">
                       <DropzoneComponent config={this.state.dropzoneConfig}
                                        eventHandlers={eventHandlers}
                                        djsConfig={djsConfig} 
                                        />
                    </div>
                    <div className="net-info">
                     <Table rows ={this.state.rows}
                                       settings={this.state.settings}
                                       onClickCell={onClickCell}
                                   
                                   />
                      
                    </div>
                </div>          
            </div>

{/*               
                <div className="predict-box-wrap">
                    <div className="predict-box-container">
                        <div className="predict-tit">
                            <h1 className="circle-blue">Drag&#38;Drop</h1>
                        </div>
                        <div className="predict-tit">
                            <h1 className="circle-blue">Result</h1>
                        </div>
                        
                        <div className="predict-box-body">
                            <section className="drag-section">
                                <div className="drag-img">
                                     <DropzoneComponent config={this.state.dropzoneConfig}
                                        eventHandlers={eventHandlers}
                                        djsConfig={djsConfig} 
                                        />
                                </div>
                            </section>
                            <section className="result-section">
                                <div className="result-value">
                                <Table rows ={this.state.rows}
                                       settings={this.state.settings}
                                       onClickCell={onClickCell}
                                   
                                   />
                                {this.state.result}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
*/}

            </article>
                                      
            
        )
    }
}



PredictResultWDNNComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
}; 

PredictResultWDNNComponent.contextTypes = {
    NN_ID: React.PropTypes.string
};



// export default class PredictResultWDNNComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//              // table: { 
//                   rows: [["ash1", "vm"],["ash", "vm"]],
//                   settings : {
//                       header: false
//                                 }          
//             }
        
//         };
    
//     eventTable() {
//       console.log ('bbb')
//     }

//     render(){

//         var txt = [['asd']]
        
//         console.log ('aaa')

//         var event = {
            
//          Table: (e) => {
//                  console.log ('ccc')
//                  this.setstate({
//                      rows: JSON.parse(txt)}
//                      )
//              }
//         }

//         //  var items = [[ 'console.count(label);' ]];

//         // // console.log('items : ' + items);

//         //  var rows = {
//         //  items
//         // }

              

//         //    console.log('header :..  ' +   this.state.rows);
        

//           return (

//             <div className="form-table">
           
//                            <div className="predict-box-wrap">
//                     <div className="predict-box-container">
//                         <div className="predict-tit">
//                             <h1 className="circle-blue">tabletest</h1>
//                         </div>
//                         <div className="predict-tit">
//                             <h1 className="circle-blue">tabletest</h1>
//                         </div>
                        
                    
                        
                        
//                         <div className="predict-box-body">
//                             <section className="drag-section">
//                                 <div className="drag-img">
//                                    <Table rows ={this.state.rows}
//                                    settings={this.state.settings}
                                   
//                                    />
                                   
//                                 </div>
//                             </section>
//                             <section className="result-section">
//                                 <div className="result-value">
//                                    < event={event}
//                                    />
//                                 </div>
//                             </section>
//                         </div>
//                     </div>
//                 </div>                 
//             </div>  
//           )
//     }

  

    
// }
