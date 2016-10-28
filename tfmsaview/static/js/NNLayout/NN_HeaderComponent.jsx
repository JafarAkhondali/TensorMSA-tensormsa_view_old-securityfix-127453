import React from 'react'

export default class NN_HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (   
			<header className="mainHeader">
				<h1 className="logo">
					<span className="hidden">tensor MSA</span>
					TensorMSA
				</h1>
				<nav>
					<h1 className="hidden">Navigator</h1>
					<ul>
						<li><a href="#" onClick={() => this.props.getHeaderEvent(0)}>Net Info</a></li>
						<li><a href="#" onClick={() => this.props.getHeaderEvent(1)}>Data</a></li>
						<li><a href="#" onClick={() => this.props.getHeaderEvent(2)}>Net conf</a></li>  
						<li><a href="#" onClick={() => this.props.getHeaderEvent(3)}>Train Statistics</a></li>
						<li><a href="#" onClick={() => this.props.getHeaderEvent(4)}>Predict Test</a></li>
					</ul>
				</nav>
				<dl className="utilMenu">
					<dt>Menu</dt>
					<dd><a href="#">help</a></dd>
					<dd><a href="#">logout</a></dd>
					<dd><a href="#"><span>Healess</span>welcome!</a></dd>
				</dl>
			</header>
        )
    }
}