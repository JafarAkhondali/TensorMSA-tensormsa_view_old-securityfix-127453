import * as React from 'react'

export default class DiagramSectionComponent extends React.Component<any,any> {
    render() {
        return (
            <section id='netconf-diagram'>                    
                <div>
                    <div className='column diagram input-layers'>
                        <h4>Features</h4>
                    </div>
                    <div className='column diagram hidden-layers'>
                        <h4>Hidden</h4>
                    </div>
                    <div className='column diagram output-layers'>
                        <h4>Output</h4>
                    </div>
                </div>                
            </section>
        )
    }
}