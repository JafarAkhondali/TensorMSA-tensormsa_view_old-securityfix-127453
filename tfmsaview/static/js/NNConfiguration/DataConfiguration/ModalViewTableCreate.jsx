import React from 'react'
import ReportRepository from './../../repositories/ReportRepository';
import Api from './../../utils/Api';

export default class ModalViewTableCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                table_name : null,
                table_rows : null,
                database_name : null,
                search_url : null,
                update_url : null,
                delete_url : null
               
                };
    }

    get_table_list(){
        let request_url = this.get_search_url();
        this.props.reportRepository.getTableList(request_url).then((table_list) => {
            let rows = [];
            let i=0;
            for (let table_name of table_list['result']){
                rows.push(<tr key={i++}><td>{table_name}</td></tr>)
            }

            this.setState({table_rows : rows})
        });
    }

    post_table_name(){
        let request_url = this.get_add_url();
        this.props.reportRepository.postTableList(request_url).then((answer) => {
            console.log(answer)
        });
    }

    delete_table_name(){
        let request_url = this.get_delete_url();
        this.props.reportRepository.deleteTableList(request_url).then((answer) => {
            console.log(answer)
        });
    }

    set_tablename(obj){
        console.log(obj.target.value)
        this.setState({table_name: obj.target.value}, function(){
            this.set_request_urls()
        }).bind(this);
        
    }

    set_databasename(obj){
        console.log(obj.target.value)
        this.setState({database_name: obj.target.value}, function(){
            console.log(this.state.database_name)
        }).bind(this);
        
    }

    get_search_url(){
        return "base/" + this.state.database_name + "/table/" ;
    }

    get_add_url(){
        return "base/" + this.state.database_name + "/table/" + this.state.table_name + "/";
    }

    get_delete_url(){
        return "base/" + this.state.database_name + "/table/" + this.state.table_name + "/";
    }

    render() {
        return (   
            <div>
                <h1>Table Management</h1>
                
                <div className="container tabBody">
                    <div id="tab1">
                        <article>
                            <table className="form-table align-left">
                                <colgroup>
                                <col width="150" />
                                <col width="500" />
                                </colgroup> 
                                <tbody>
                                <tr>
                                    <th>Insert New</th>
                                    <td>
                                        <select onChange={this.set_databasename.bind(this)} value={this.state.value}>
                                            <option value="1">Data Base List</option>
                                            <option value="mes">MES</option>
                                            <option value="scm">SCM</option>
                                            <option value="erp">ERP</option>
                                        </select>
                                        <input type="text" name="table_name" placeholder="table_name" 
                                        onChange={this.set_tablename.bind(this)} value={this.state.value} />
                                        <button type="button" onClick={this.get_table_list.bind(this)}>Search</button>
                                        <button type="button" onClick={this.set_tablename.bind(this)}>Add</button>
                                        <button type="button" onClick={this.delete_table_name.bind(this)}>Delete</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="table marginT10">
                                <thead>
                                    <tr>
                                        <th>Table Name</th>
                                    </tr>
                                </thead>
                                <tbody className="center">      
                                    {this.state.table_rows}  
                                </tbody>
                            </table>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
} 

ModalViewTableCreate.defaultProps = {
    reportRepository: new ReportRepository(new Api())
};