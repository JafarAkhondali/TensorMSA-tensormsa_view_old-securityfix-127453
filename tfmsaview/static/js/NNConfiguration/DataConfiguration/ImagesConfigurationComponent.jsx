import React from 'react';
import ImagePreviewLayout from './ImageData_PreviewLayout'
import ReportRepository from './../../repositories/ReportRepository'
import Api from './../../utils/Api'

export default class ImagesConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
                image_paths : "",
                network_id : "nn0000091",
                database_name : "",
                table_name : "",
                label_name : "",
                form_action : ""
                };
    }

    search_btn(nnid){
        this.props.reportRepository.getPreviewImagePath(this.state.network_id).then((preview_paths) => {
            this.setState({image_paths: preview_paths['result']})
        });
    }

    set_tablename(obj){
        console.log(obj.target.value);
        this.setState({table_name: obj.target.value});
        this.set_form_url.bind(this) ;
    }

    set_databasename(obj){
        console.log(obj.target.value)
        this.setState({database_name: obj.target.value});
        this.set_form_url.bind(this) ;
    }

    set_labelname(obj){
        this.setState({label_name: obj.target.value});
        this.set_form_url.bind(this) ;
    }

    set_form_url(){
        upload_url = "/api/v1/type/imagefile/base/" + this.state.database_name + "/table/" + this.state.table_name + "/label/" + this.state.label_name +"/data/"+ this.state.network_id +"/"
        this.setState({table_name: upload_url})
        console.log(this.state.form_action)
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
                            <col width="500" />
                            <col width="300" />
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
                                            <option value="MES">MES</option>
                                            <option value="SCM">SCM</option>
                                            <option value="ERP">ERP</option>
                                        </select>
                                        <label className="bullet" htmlFor="Table">Table</label>
                                        <input type="text" name="table_name" placeholder="table_name"  onChange={this.set_tablename.bind(this)} value={this.state.value} />
                                        <label className="bullet" htmlFor="Label">Label</label>
                                        <input type="text" name="label_name" placeholder="label_name"  onChange={this.set_labelname.bind(this)} value={this.state.value} />
                                    </td>
                                    <td width>
                                        <button type="button" onClick={() => this.search_btn()} className="img-btn save">Search</button>
                                        <button type="button" onClick={() => this.search_btn()} className="img-btn save">Upload</button>
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


    // <form action={this.state.form_action}
    //   method="post"
    //   enctype="multipart/form-data">
    //     <input type="file"
    //            name="file"
    //            id="id_file3" multiple
    //            className="img-btn save"/>
    //     <input type="submit" value="UPLOAD" className="img-btn save"/>
    // </form>