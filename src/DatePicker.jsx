
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import ReactDOM from 'react-dom';
import cars from './cars';
import { makeStyles } from '@material-ui/core/styles';
import CarGrid from './CarGrid';
import Button from '@material-ui/core/Button';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: ' ',
            days: 1,
            carId: null
        };
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleChange2(date) {
        this.setState({
            endDate: date
        });

    }

    calculateDays() {
        const date1 = this.state.startDate;
        const date2 = this.state.endDate;
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays);
        this.setState({
            days: diffDays
        });
        return ReactDOM.render(
            <p>Wynajmuesz na {diffDays} dni</p>,
            document.getElementById('Rent-period')
        )
    }

    search(startDate, endDate){
        if (startDate === '' || endDate === ''){
            alert('Musisz zaznaczyć daty')
            return;
        }

        if (endDate < startDate) {
            alert('Druga końca musi byc wieksza niż data początku!');
            return;
        }
        this.calculateDays()
        console.log("this.state.days " + this.state.days)
        const carGrid = <CarGrid days={this.state.days}/>
        return ReactDOM.render(
            carGrid,
            document.getElementById('Grid-holder')
        )
    }

    handleSelectCar(id) {
        this.setState({
            carId: id
        });
    }

    render() {
        return (
            <div>
                <p1>Wybierz okres:</p1>

                <div className="date-input">
                    <div className="date-input-caption"><b>Od:</b></div>
                    <DayPickerInput onDayChange={day => this.handleChange(day)} />
                </div>
                <div className="date-input">
                    <div className="date-input-caption"><b>Do:</b></div>
                    <DayPickerInput onDayChange={day => this.handleChange2(day)} /></div>
                    <Button variant="contained" color="primary" onClick={event => this.search(this.state.startDate, this.state.endDate)}>
        Wyszukaj
</Button>
                <div id="Rent-period"></div>
                <div id="Grid-holder">
        </div>
            </div>
        );
    }
}
export default DatePicker;