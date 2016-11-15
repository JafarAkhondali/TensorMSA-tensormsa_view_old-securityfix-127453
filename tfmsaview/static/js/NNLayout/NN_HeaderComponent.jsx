import React from 'react'

export default class NN_HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                selected:null
                };
    }

    setFilter(filter){
        this.setState({selected  : filter})
        switch (filter) {
            case 1:
                return this.props.getHeaderEvent(1); //call Net Info
            case 2:
                return this.props.getHeaderEvent(2); //call Data Configuration
            case 3:
                return this.props.getHeaderEvent(3); //call Data Configuration
            case 4:
                return this.props.getHeaderEvent(4); //call Data Configuration
            case 5:
                return this.props.getHeaderEvent(5); //call Data Configuration
        }
    }

    isActive(value){
    	return ((value===this.state.selected) ? 'current':'');
    }

    render() {
        return (   
			<header className="mainHeader">
				<a href="#" onClick={() => this.props.getHeaderEvent(0)}>
					<h1 className="logo">
					<span className="hidden">HOYA</span>	
					<span className="logo-image"></span>
					<span className="system-logo"></span>
					</h1>
				</a>		
				<nav>
					<h1 className="hidden">Navigator</h1>
					<ul>
						<li className={this.isActive(1)}><a href="#" onClick={this.setFilter.bind(this, 1)}>Net Info</a></li>
						<li className={this.isActive(2)}><a href="#" onClick={this.setFilter.bind(this, 2)}>Data</a></li>
						<li className={this.isActive(3)}><a href="#" onClick={this.setFilter.bind(this, 3)}>Net conf</a></li>  
						<li className={this.isActive(4)}><a href="#" onClick={this.setFilter.bind(this, 4)}>Train Statistics</a></li>
						<li className={this.isActive(5)}><a href="#" onClick={this.setFilter.bind(this, 5)}>Predict Test</a></li>
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