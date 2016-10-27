import * as React from 'react'
import {render} from 'react-dom'
import Header from './header'
import DiagramSection from './diagramSection'
import TableSection from './tableSection'
import Footer from './footer'
import '../scss/style.scss';

class NetConf extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Header/>
                <DiagramSection/>
                <TableSection/>
                <Footer/>
            </div>
        ) 
    }
}

render(<NetConf/>, document.getElementById('main'));