import React from 'react'

export default class NN_HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (   
			<header className="mainHeader">
				<a href="#">
					<h1 className="logo">
					<span className="hidden">HOYA</span>	
					<span className="logo-image"></span>
					<span className="system-logo"></span>
					</h1>
				</a>		
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
					<dd className="utilMenu-help"><a href="#"><span>help</span></a></dd>
					<dd className="utilMenu-logout"><a href="#"><span>logout</span></a></dd>
					<dd className="utilMenu-user-info">
						<a href="#">
						<span className="user-name">Suk Jae-Ho</span>
						<span> welcome!</span>
						</a>
					</dd>
				</dl>
			</header>
        )
    }
}