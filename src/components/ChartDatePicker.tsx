import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import useDate from '../hooks/useDate';
import DatePicker from 'react-datepicker';
import { datePickerProps } from '../lib/datepicker/datePickerProps';
import {
  setCalendarData,
  setStartDateState,
  setEndDateState,
} from '../redux/actions/chartActions';
import 'react-datepicker/dist/react-datepicker.css';

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

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 20px 5px 0;
`;

const SearchButton = styled.button`
  width: 45px;
  height: 36px;
  outline: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.borderGrey};
  border-radius: 10px;
  background: ${({ theme }) => theme.color.bgButton};
  color: ${({ theme }) => theme.color.grey};
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
`;
