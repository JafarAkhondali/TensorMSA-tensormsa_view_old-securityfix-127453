import React from 'react'

export default class TableSectionComponent extends React.Component {
    render() {
        return (
            <section id='netconf-table'>                    
                <div>
                    <div className='column table input-layers'>
                        <h4>Input</h4>
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
                    </div>
                    <div className='column table hidden-layers'>
                        <h4>Hidden</h4>
                        <table id='hidden_table' className='form-table align-center'>
                            <thead>
                                <tr>
                                    <th>Hidden</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hidden</td>
                                </tr>                            
                            </tbody>
                        </table>                        
                    </div>
                    <div className='column table output-layers'>
                        <h4>Output</h4>
                        <table id='output_table' className=' table form-table align-center'>
                            <thead>
                                <tr>                            
                                    <th>Input</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Output</td>
                                </tr>                            
                            </tbody>
                        </table>                        
                    </div>
                </div>                
            </section>
        )
    }
}
