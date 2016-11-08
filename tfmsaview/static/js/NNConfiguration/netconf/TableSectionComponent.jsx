import React from 'react'

export default class TableSectionComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section id='netconf-table'>                    
                <div className='l--body'>
                    <dl className="layer-box">
                        <dt><span className="circle-blue">Input Layer</span></dt>
                        <dd>
                            <table id='input_table' className='form-table align-center'>
                                <thead>
                                    <tr>
                                        <th>Input</th>
                                        <th>Input2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Input1</td>
                                        <td>Input2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                
                    <dl className="layer-box">
                        <dt><span className="circle-blue">Hidden Layer</span></dt>
                        <dd>
                            <table id='hidden_table' className='form-table align-center'>
                                <thead>
                                    <tr>
                                        <th>Input</th>
                                        <th>Input2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Input1</td>
                                        <td>Input2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                
                    <dl className="layer-box">
                        <dt><span className="circle-blue">Output Layer</span></dt>
                        <dd>
                            <table id='output_table' className='form-table align-center'>
                                <thead>
                                    <tr>
                                        <th>Input</th>
                                        <th>Input2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Input1</td>
                                        <td>Input2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>    
                </div>                
            </section>
        )
    }
}
