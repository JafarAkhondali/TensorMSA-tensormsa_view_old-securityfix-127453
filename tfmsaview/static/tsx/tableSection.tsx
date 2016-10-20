import * as React from 'react'

export default class TableSection extends React.Component<any,any> {
    render() {
        return (
            <section id='netconf-table'>                    
                <div>
                    <div className='column table input-layers'>
                        <h4>Input</h4>
                    </div>
                    <div className='column table hidden-layers'>
                        <h4>Hidden</h4>
                    </div>
                    <div className='column table output-layers'>
                        <h4>Output</h4>
                    </div>
                </div>                
            </section>
        )
    }
}