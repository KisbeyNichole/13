import react, {Component} from 'react'

export default class From extends Component {
    render() {
        return (
            <form id="loginForm">
                <h3>Log In</h3>
                <label htmlFor="userName">User Name</label>
                <input id="userName"></input>

                <label htmlFor="userPassword"> Password</label>
                <input id="userPassword"></input>
                <button>Log In</button>
            </form>
        )
    }
}