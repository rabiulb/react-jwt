import React, { Component } from 'react'

export default class Auth extends Component {
    render() {
        return (
            <div>
              <div>
                            <input type="text" placeholder="email"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <br /><br />
                            <button onClick={() => this.login()}>Login</button>
                            <button onClick={() => this.setState({ isRegister: true })}>Go to Register</button>
                        </div>
                        :
                        <div>
                            <input type="text" placeholder="name"
                                onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="email"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <br /><br />
                            <input type="text" placeholder="confirm password"
                                onChange={(e) => { this.setState({ c_password: e.target.value }) }} />
                            <br /><br />
                            <button onClick={() => this.register()}>Register</button>
                            <button onClick={() => this.setState({ isRegister: false })}>Go to Login</button>

                        </div>
            </div>
        )
    }
}
