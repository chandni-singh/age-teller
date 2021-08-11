import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AppStats from './AppStats';
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newDate: '',
            birthday: '1996-04-11',
            showStats: false
        }
    }

    changeBirthday() {
        this.setState({birthday: this.state.newDate, showStats: true});
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
                        {this.state.showStats ? 
                            <div className='fade age-stats'>
                                <AppStats date={this.state.birthday} /> 
                            </div>
                        : <div />}
               </Form>
            </div>
        )
    }
}