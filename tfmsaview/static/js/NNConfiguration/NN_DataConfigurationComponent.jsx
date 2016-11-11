import React from 'react'
import MetaStoreConfigurationComponent from './DataConfiguration/MetaStoreConfigurationComponent'
import ImagesConfigurationComponent from './DataConfiguration/ImagesConfigurationComponent'
import StepArrowComponent from './../NNLayout/common/StepArrowComponent'

export default class NN_DataConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                DataConfigurationComponent : <MetaStoreConfigurationComponent/>,
                selected:'meta' //initail lodaing is meta
                };
    }

    setFilter(filter){
        this.setState({selected  : filter})
        if (filter == 'meta') {
            return this.getTableData();
        }
        else{
            return this.getImageData();
        }
    }

    getTableData(){
        this.setState({DataConfigurationComponent  : <MetaStoreConfigurationComponent/>});
    }

    getImageData(){
        this.setState({DataConfigurationComponent  : <ImagesConfigurationComponent/>});
    }

    isActive(value){
    return ((value===this.state.selected) ? 'current':'');
    }


    render() {
        return (
            <section>
                <h1 className="hidden">tensor MSA main table</h1>
                    <ul className="tabHeader">
                        <li className={this.isActive('meta')} onClick={this.setFilter.bind(this, 'meta')}><a href="#">Meta Store</a></li>
                        <li className={this.isActive('images')} onClick={this.setFilter.bind(this, 'images')}><a href="#">Images</a></li>
                        <li className={this.isActive('texts')} onClick={this.setFilter.bind(this, 'texts')}><a href="#">Raw Texts</a></li>
                        <StepArrowComponent />
                    </ul>
				    {this.state.DataConfigurationComponent}
            </section>
        )
    }
}