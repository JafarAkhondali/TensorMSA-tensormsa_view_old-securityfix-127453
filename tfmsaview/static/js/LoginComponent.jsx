import React from 'react'

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
                    <button>Log In</button>
                </dl>
            </section>
        )
    }
}