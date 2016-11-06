import React from 'react';
import MetaStoreConfigurationComponent from './DataConfiguration/MetaStoreConfigurationComponent'
import ImagesConfigurationComponent from './DataConfiguration/ImagesConfigurationComponent'

export default class NN_DataConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
                DataConfigurationComponent : null,
                selected:'meta', //initail lodaing is meta
                tabArea: <MetaStoreConfigurationComponent/>
                };
    }

  setFilter(filter) {
    this.setState({selected : filter})
    switch (filter) {    //add change component logic
        case 'meta':
            this.setState({tabArea: <MetaStoreConfigurationComponent/>})
            break;
        case 'images':
            this.setState({tabArea: <ImagesConfigurationComponent/>})
            break;
    }
  }

  isActive(value){
    return ((value===this.state.selected) ? 'current':'');
  }

    render() {
        return (
            // <section>
            //         Net Configuration
            //         <form action="/api/v1/type/wdnn/predict/nn0000014/" method="post">
            //             File:
            //             <input type="file" name="file" id="id_file" />
            //             <input type="submit" value="UPLOAD" />
            //         </form>
            // </section>
            <section>
                <h1 className="hidden">tensor MSA main table</h1>
                    <ul className="tabHeader">
                        <li className={this.isActive('meta')} onClick={this.setFilter.bind(this, 'meta')}><a href="#">Meta Store</a></li>
                        <li className={this.isActive('images')} onClick={this.setFilter.bind(this, 'images')}><a href="#">Images</a></li>
                        <li className={this.isActive('texts')} onClick={this.setFilter.bind(this, 'texts')}><a href="#">Raw Texts</a></li>
                        <div className="btnArea">
                            <button type="button" className="img-btn save">Save</button>
                        </div>
                    </ul>   
				    {this.state.tabArea}
            </section>
        )
    }
}