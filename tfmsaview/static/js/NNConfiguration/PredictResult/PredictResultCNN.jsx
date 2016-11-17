import React from 'react';
import FileUpload from 'react-fileupload';
import DropzoneComponent from 'react-dropzone-component';

export default class NN_PredictResultComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result:'image uplaod'};
    }

    updateResult(result) {
        console.log('updateResult Called : ' + result);
        this.setState(JSON.parse(result));
    }

    resultDropMutiple(dropzone){

        console.log('resultDropMutiple log : ' + dropzone);
        console.log(dropzone)

    }

    setDropzone(dropzone) {
        console.log('setDropzone')
        console.log(dropzone)
        this.dropzone = dropzone
    }

    dropzoneUpload() {
        console.log('dropzoneUpload')
        this.dropzone.processQueue();
    }

    render() {
        const options = {
            baseUrl:'http://52.78.19.96:8989/api/v1/type/cnn/predict/nn0000047/',
            multiple: true,
            fileFieldName(file) {
                return "file"
            },
            chooseFiles: function(files) {
                console.log('filese : ' + files)
            },
            uploadSuccess : function(resp){
                this.props.updateState(resp)
                console.log('upload success..!' + resp)
                
            }
        }  
        
            
        var componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'http://52.78.19.96:8989/api/v1/type/cnn/predict/nn0000047/',
            uploadMultiple: true
        };

        var djsConfig = { autoProcessQueue: false }
        var eventHandlers = { 
            init: (passedDropzone) => {
                this.setDropzone(passedDropzone)
            },
            addedfile: (file) => console.log(file),
            success: (e, response) => {
                console.log(response);
                this.updateResult(response);
            },
            processingmultiple: (file) => {
                console.log('processingMultiple : ' )
                console.log(file);
            },
            processing: (file) => {
                console.log('processing : ' )
                console.log(file);
            }
            

            

        }


        

        return (
            <section>
                <h1 className="hidden">PredictResult</h1>
                <ul className="tabHeader">
                  
                    <div className="btnArea">
                        <button type="button" className="img-btn save">Select file</button>
                        <button type="button" className="img-btn save">Predict</button>   
                        
                          
                    </div>
                </ul>
                <FileUpload options={options} updateState={this.updateResult.bind(this)}>
                    <button ref="chooseBtn">choose</button>
                    <button ref="uploadBtn">upload</button>
                   
                </FileUpload>
                 <div className="container tabBody">
                    <article>
                    <button ref="uploadBtn" onClick={this.dropzoneUpload.bind(this)} >upload</button>
                    <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} 
                        updateState={this.updateResult.bind(this)}
                       />,

                       
                        <dl className="data-box clearB w100p hInherit marginT10">
                            <dt><span className="circle-green">Sample Data</span></dt>
                            <dd>
                              <div>result : {this.state.result}</div>  
                            </dd>
                        </dl>
                    </article>
                 </div>  
            </section>
        )
    }
}

                       