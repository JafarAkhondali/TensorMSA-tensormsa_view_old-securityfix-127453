import React from 'react';
import FileUpload from 'react-fileupload';

export default class NN_PredictResultComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result:'image uplaod'};
    }

    updateResult(result) {
        console.log('updateResult Called : ' + result);
        this.setState(result);
    }

    render() {
        const options = {
            baseUrl:'http://52.78.19.96:8989/api/v1/type/cnn/predict/nn0000090/',
            fileFieldName(file) {
                return "file"
            },
            uploadSuccess : function(resp){
                this.props.updateState({result: 'bbbb'})
                console.log('upload success..!' + resp)
            }
        }            
        return (
            <section>
                <h1 className="hidden">PredictResult</h1>
                <ul className="tabHeader">
                    <li className="current"><a href="#">WDNN</a></li>
                    <li><a href="#">CNN</a></li>                  
                    <div className="btnArea">
                        <button type="button" className="img-btn save">Select file</button>
                        <button type="button" className="img-btn save">Predict</button>                       
                    </div>
                </ul>
                <FileUpload options={options} updateState={this.updateResult}>
                    <button ref="chooseBtn">choose</button>
                    <button ref="uploadBtn">upload</button>
                </FileUpload>
                 <div className="container tabBody">
                    <article>
                       
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

                       