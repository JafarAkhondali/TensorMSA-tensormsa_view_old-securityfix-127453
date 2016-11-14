import React from 'react'
import NN_HeaderComponent from './NNLayout/NN_HeaderComponent'
import NN_SectionComponent from './NNLayout/NN_SectionComponent'
import NN_FooterComponent from './NNLayout/NN_FooterComponent'
import NN_InfoListComponent from './NNConfiguration/NN_InfoListComponent'
import NN_BasicInfoComponent from './NNConfiguration/NN_BasicInfoComponent'
import NN_DataConfigurationComponent from './NNConfiguration/NN_DataConfigurationComponent'
import NN_NetworkConfigurationComponent from './NNConfiguration/NN_NetworkConfigurationComponent'
import NN_TrainStaticComponent from './NNConfiguration/NN_TrainStaticComponent'
import NN_ModalComponent from './NNLayout/NN_ModalComponent';
import MainSectionComponent from './NNLayout/MainSectionComponent';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
            this.state = {  
                        NN_InfoList : <MainSectionComponent />
                         };
            this.addNewNNInfo = this.addNewNNInfo.bind(this); 
            this.getHeaderEvent = this.getHeaderEvent.bind(this);//need method to send child
        }

      getChildContext() {
          return {NN_ID: "nn0000047"};
        }

    getHeaderEvent(i){
        switch (i) {
            case 0:
                return this.getMainInfo(); //call Net Info
            case 1:
                return this.getNetInfo(); //call Net Info
            case 2:
                return this.setDataConfiguration(); //call Data Configuration
            case 3:
                return this.setNetConfiguration(); //call Data Configuration
            case 4:
                return this.getTimeStatistics(); //call Data Configuration
            case 5:
                return this.getTimeStatistics(); //call Data Configuration
        }
    }

    getMainInfo(){
        this.setState({NN_InfoList: <MainSectionComponent />});        
    }

    getNetInfo(){
        this.setState({NN_InfoList: <NN_InfoListComponent addNewNNInfo={this.addNewNNInfo} getHeaderEvent={this.getHeaderEvent} />});        
    }
    
    addNewNNInfo(){
            this.setState({NN_InfoList: <NN_BasicInfoComponent/>});   
    }
    
    setDataConfiguration(){
            this.setState({NN_InfoList: <NN_DataConfigurationComponent/>});   
    }

    setNetConfiguration(){
            this.setState({NN_InfoList: <NN_NetworkConfigurationComponent/>});   
    }

    getTimeStatistics(){
            this.setState({NN_InfoList: <NN_TrainStaticComponent/>});   
    }

    render() {
        return (
            <div>
				<NN_HeaderComponent getHeaderEvent={this.getHeaderEvent} /> 
				<NN_SectionComponent NN_InfoList={this.state.NN_InfoList} getHeaderEvent={this.getHeaderEvent} />
				<NN_FooterComponent/>                                  
			</div>
        )
    }
}

HomeComponent.childContextTypes = {
  NN_ID: React.PropTypes.string
};