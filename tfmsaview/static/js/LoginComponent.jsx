import React from 'react'
import { Link } from 'react-router'

export default class LoginComponent extends React.Component {
    render() {
        return (
                <section id="login-section">
                    <dl>
                    <span></span>
                        <dt>ID</dt>
                        <dd><input type="text" name="" /></dd>
                        <dt>P/W</dt>
                        <dd><input type="password" name="" /></dd>
                        <Link to="login"><button>Log In</button></Link>                    
                    </dl>
                </section>
            )
    }
}