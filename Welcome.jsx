import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            firstName: '',
            lastName: ''
        };
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    increment5 = () => {
        this.setState(prevState => ({
            count: prevState.count + 5
        }));
    }

    reset = () => {
        this.setState({ count: 0 });
    }

    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    render() {
        return (
            <div className="welcome-container">
                <h1>Count: {this.state.count}</h1>
                <div className="button-group">
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.increment5}>Increment 5</button>
                </div>
                
                <h1>Welcome to CHARUSAT!!!</h1>
                
                <div className="form-group">
                    <div className="input-group">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            value={this.state.firstName}
                            onChange={this.handleFirstNameChange}
                        />
                    </div>
                    <div className="input-group">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            value={this.state.lastName}
                            onChange={this.handleLastNameChange}
                        />
                    </div>
                    
                    <div className="display-names">
                        <p>First Name: {this.state.firstName}</p>
                        <p>Last Name: {this.state.lastName}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
