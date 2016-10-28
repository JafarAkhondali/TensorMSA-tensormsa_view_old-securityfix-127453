import React from 'react'
import NN_InfoListComponent from './../NNConfiguration/NN_InfoListComponent'
import NN_BasicInfoComponent from './../NNConfiguration/NN_BasicInfoComponent'

export default class NN_SectionComponent extends React.Component {

    render() {
        return (   
					<main>
					       {this.props.NN_InfoList}
					</main>
        )
    }
}