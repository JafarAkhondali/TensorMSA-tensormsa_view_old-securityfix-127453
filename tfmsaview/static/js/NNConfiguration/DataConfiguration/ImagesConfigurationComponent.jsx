import React from 'react';
import ImagePreviewLayout from './ImageData_PreviewLayout'
import ReportRepository from './../../repositories/ReportRepository'
import Api from './../../utils/Api'
import FileUpload from 'react-fileupload';

export default class ImagesConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                image_paths : null,
                network_id : "nn0000091",
                database_name : null,
                table_name : null,
                label_name : null,
                form_action : null,
                upload_file_list : [],
                rate : 0,
                file_upload_settings : {
                    baseUrl : null,
                    param:
                    {
                        fid:0
                    },
                    multiple:true,
                    chooseAndUpload:true,
                    doUpload : function(files,mill){
                        console.log('you just uploaded',typeof files == 'string' ? files : files[0].name)
                    },
                    uploading : function(progress){
                        this.setState({rate : progress.loaded/progress.total})
                        console.log('loading...',progress.loaded/progress.total+'%')
                    },
                    uploadSuccess : function(resp){
                        console.log('upload success..!')
                    },
                    uploadError : function(err){
                        alert(err.message)
                    },
                    uploadFail : function(resp){
                        alert(resp)
                    }
                }

                };
    }

    search_btn(nnid){
        this.props.reportRepository.getPreviewImagePath(this.state.network_id).then((preview_paths) => {
            this.setState({image_paths: preview_paths['result']})
        });
    }

    set_tablename(obj){
        this.setState({table_name: obj.target.value});
        this.set_form_url() ;
    }

    set_databasename(obj){
        this.setState({database_name: obj.target.value});
        this.set_form_url() ;
    }

    set_labelname(obj){
        this.setState({label_name: obj.target.value});
        this.set_form_url() ;
    }

    set_form_url(){
        let test_ip = "http://52.78.19.96:8989"
        let upload_url = "/api/v1/type/imagefile/base/" + this.state.database_name + "/table/" + this.state.table_name + "/label/" + this.state.label_name +"/data/"+ this.state.network_id +"/"
        test_ip = test_ip + upload_url
        this.setState({form_action: test_ip})

        let file_upload_settings = this.state.file_upload_settings
        file_upload_settings.baseUrl = test_ip

        this.setState({file_upload_settings:file_upload_settings})
        console.log(this.state.file_upload_settings)
    }

    set_upload_file(obj){

        let reader = new FileReader();
        let file_set = obj.target.files
        let upload_file_arr = this.state.upload_file_list
        for(let file of file_set) {
            upload_file_arr.push(file)
            this.setState({upload_file_list: upload_file_arr})
        }
    }

    render() {
        return (
            <div className="container tabBody">
                <div id="tab1">
                    <article>
                        <table className="form-table align-left">
                            <colgroup>
                            <col width="60" />
                            <col width="60" />
                            <col width="60" />
                            <col width="350" />
                            <col width="60" />
                            <col width="60" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>Network ID</th>
                                    <td width>{this.state.network_id}</td>
                                    <th>Upload Info</th>
                                    <td width>
                                        <label className="bullet" htmlFor="DB">DB</label>
                                        <select onChange={this.set_databasename.bind(this)} value={this.state.value}>
                                            <option value="1">Data Base List</option>
                                            <option value="mes">MES</option>
                                            <option value="scm">SCM</option>
                                            <option value="erp">ERP</option>
                                        </select>
                                        <label className="bullet" htmlFor="Table">Table</label>
                                        <input type="text" name="table_name" placeholder="table_name"  onChange={this.set_tablename.bind(this)} value={this.state.value} />
                                        <label className="bullet" htmlFor="Label">Label</label>
                                        <input type="text" name="label_name" placeholder="label_name"  onChange={this.set_labelname.bind(this)} value={this.state.value} />
                                    </td>
                                    <td width>
                                        <button type="button" onClick={() => this.search_btn()} className="img-btn save">Search</button>
                                    </td>
                                    <td width>
                                        <FileUpload options={this.state.file_upload_settings}>
                                            <button className="img-btn save" onClick={this.set_form_url.bind(this)} ref="chooseAndUpload">upload</button>
                                        </FileUpload>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table marginT10">
                            <ImagePreviewLayout image_paths={this.state.image_paths}/>
                        </table>
                    </article>
                </div>
            </div>
        )
    }
}

ImagesConfigurationComponent.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};