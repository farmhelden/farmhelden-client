import React, {Component, useState} from 'react';
import Calendar from 'react-calendar';

export interface CalendarDateProps {
  startDate: string,
  endDate: string
 // onChange: dates: [string, string] => void
}

const CalendarPicker = () => {

  const [startDate, setStartDate] = useState<CalendarDateProps>(null);
  const [endDate, setEndDate] = useState<CalendarDateProps>(null);

  return (
    <div>
      <Calendar
        onChange={(dates) => {
          setStartDate(dates[0]);
          setEndDate(dates[1]);
        }}
        selectRange={true}
       />
    </div>
  );
};

export default CalendarPicker;