import React from 'react';
import partyPopper from './assets/party-popper.jpg';

export default class AppStats extends React.Component {

    timeSince(date) {
        const today = new Date().getTime();
        const birthdayDate = new Date(date).getTime();
        let difference = Math.abs(today - birthdayDate);

        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor(days/365);
        days -= years*365;
        let months = Math.floor(days/30);
        days -= months*30;

        return `${years} years, ${months} months and ${days} days`
    }

    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
                <img src={partyPopper} alt='party popper' className='party-popper' />
            </div>
        );
    }
}