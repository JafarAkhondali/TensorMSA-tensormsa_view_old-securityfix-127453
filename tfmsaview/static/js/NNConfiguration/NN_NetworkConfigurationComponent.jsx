import React from 'react';
import DiagramSectionComponent from './netconf/DiagramSectionComponent';
import TableSectionComponent from './netconf/TableSectionComponent';

export default class NN_NetworkConfigurationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <DiagramSectionComponent/>
                <TableSectionComponent/>
            </section>
        )
    }
}