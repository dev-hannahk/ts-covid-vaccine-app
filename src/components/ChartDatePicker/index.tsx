import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { theme } from '../../styles/theme';
import useDate from '../../hooks/useDate';
import DatePicker from 'react-datepicker';
import { datePickerProps } from '../../lib/datepicker/datePickerProps';
import {
  setCalendarData,
  setStartDateState,
  setEndDateState,
} from '../../redux/actions/chartActions';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerWrapper, SearchButton } from './styles';

function ChartDatePicker() {
  const {
    initialStartDate,
    initialEndDate,
    initialSido,
    period,
    startDateString,
  } = useDate();

  const [startDate, setStartDate] = useState<Date>(initialStartDate);
  const [endDate, setEndDate] = useState<any>(initialEndDate);
  const dispatch = useDispatch();

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    dispatch(setStartDateState(start));
    if (end !== null) return dispatch(setEndDateState(end));
  };

  const handleButtonClick = () => {
    dispatch(setCalendarData(period, startDateString, initialSido));
  };

  return (
    <DatePickerWrapper>
      <DatePicker
        {...datePickerProps}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
      <SearchButton theme={theme} onClick={handleButtonClick}>
        조회
      </SearchButton>
    </DatePickerWrapper>
  );
}

export default ChartDatePicker;
