import * as React from 'react'
import {render} from 'react-dom'
import DiagramSectionComponent from './DiagramSectionComponent'
import TableSectionComponent from './TableSectionComponent'
import '../scss/style.scss';

class NN_NetConfComponent extends React.Component<any, any> {
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

render(<NN_NetConfComponent/>, document.getElementById('main'));