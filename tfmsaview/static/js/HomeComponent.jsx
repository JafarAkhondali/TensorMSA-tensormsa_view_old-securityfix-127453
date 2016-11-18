import React from 'react'
import NN_HeaderComponent from './NNLayout/NN_HeaderComponent'
import NN_SectionComponent from './NNLayout/NN_SectionComponent'
import NN_FooterComponent from './NNLayout/NN_FooterComponent'
import NN_InfoListComponent from './NNConfiguration/NN_InfoListComponent'
import NN_BasicInfoComponent from './NNConfiguration/NN_BasicInfoComponent'
import NN_DataConfigurationComponent from './NNConfiguration/NN_DataConfigurationComponent'
import NN_NetworkConfigurationComponent from './NNConfiguration/NN_NetworkConfigurationComponent'
import NN_TrainStaticComponent from './NNConfiguration/NN_TrainStaticComponent'
import NN_PredictResultComponent from './NNConfiguration/NN_PredictResultComponent'
import NN_ModalComponent from './NNLayout/NN_ModalComponent';
import MainSectionComponent from './NNLayout/MainSectionComponent';
import NN_PreProcessingComponent from './NNConfiguration/NN_PreProcessingComponent'

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
            this.state = {  
                        NN_InfoList : <MainSectionComponent />,
                        NN_ID : null
                         };
            this.addNewNNInfo = this.addNewNNInfo.bind(this); 
            this.getHeaderEvent = this.getHeaderEvent.bind(this);
            this.setActiveItem = this.setActiveItem.bind(this);
        }

    getChildContext() {
          return {NN_ID : this.state.NN_ID};
    }

    setActiveItem(item) {
        this.setState({NN_ID: item});
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
                return this.getPredictResult(); //call Data Configuration    
            case 6:
                return this.getPreProcessing(); //call Data Configuration 
        }
    }

    getMainInfo(){
        this.setState({NN_InfoList: <MainSectionComponent />});    
    }

    getNetInfo(){
       this.setState({NN_InfoList: <NN_InfoListComponent setActiveItem={this.setActiveItem} addNewNNInfo={this.addNewNNInfo} getHeaderEvent={this.getHeaderEvent} />});
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

    getPredictResult(){
            this.setState({NN_InfoList: <NN_PredictResultComponent/>});   
    }

    getPreProcessing(){
            this.setState({NN_InfoList: <NN_PreProcessingComponent/>});   
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
}