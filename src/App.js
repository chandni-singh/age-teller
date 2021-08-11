import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AppStats from './AppStats';
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newDate: '',
            birthday: '1996-04-11'
        }
    }

    changeBirthday() {
        console.log(this.state);
        this.setState({birthday: this.state.newDate});
    }

    render() {
        return (
            <div className='App'>
                <Form inline>
                    <h2>Enter your Birthday!</h2>
                    <FormControl type="Date" onChange={e => this.setState({newDate: e.target.value})} />
                    {' '}
                    <Button onClick={() => this.changeBirthday()}>
                        Submit
                    </Button>
                    <AppStats date={this.state.birthday} />
                </Form>
            </div>
        )
    }
}