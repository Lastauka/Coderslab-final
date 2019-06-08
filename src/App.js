import React from 'react';
import './App.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DatePicker from './DatePicker'
import 'react-day-picker/lib/style.css';
import CarGrid from './CarGrid';
import { createMuiTheme } from '@material-ui/core/styles';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        Wypożyczalnia samochodów
      </header>
      <div className="App-container">
        <div>
          <div className="Date-picker-container" id="date-from"><DatePicker /></div>
        </div>
      </div>

    </div>
  );
}

export default App;

