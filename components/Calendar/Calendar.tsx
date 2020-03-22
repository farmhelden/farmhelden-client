import React from "react";
import ReactCalendar from "react-calendar";

type Props = {
  onChange: (dates: [string, string]) => void;
  [key: string]: any;
};

const Calendar = ({ onChange, ...rest }: Props) => {
  return (
    <div>
      <ReactCalendar onChange={onChange} selectRange={true} {...rest} />
    </div>
  );
};

export default Calendar;
