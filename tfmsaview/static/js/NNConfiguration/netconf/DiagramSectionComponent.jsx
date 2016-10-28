import React from 'react'

export default class DiagramSectionComponent extends React.Component {
    render() {
        return (
            <section id='netconf-diagram'>
                <div id="main-part" class="l--page">
                    <div className='column features'>
                        <h4>Features</h4>
                    </div>
                    <div className='column hidden-layers'>
                        <h4>
                            <div class="ui-numHiddenLayers">
                                <button id="add-layers" class="mdl-button mdl-js-button mdl-button--icon">
                                    <i class="material-icons">add</i>
                                </button>
                                <button id="remove-layers" class="mdl-button mdl-js-button mdl-button--icon">
                                    <i class="material-icons">remove</i>
                                </button>
                            </div>
                        </h4>
                        <div class="bracket"></div>
                        <span id="num-layers"></span>
                        <span id="layers-label"></span>
                    </div>
                    <div className='column output'>
                        <h4>Output</h4>
                    </div>
                </div>
            </section>
        )
    }
}