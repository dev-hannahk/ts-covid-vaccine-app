import React, { forwardRef } from 'react';
import styled from 'styled-components';
import getDay from 'date-fns/getDay';
import ko from 'date-fns/locale/ko';
import { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { setMaxDate } from '../../functions/getDateFunctions';
registerLocale('ko', ko);

type ButtonProps = React.HTMLProps<HTMLButtonElement>;

const DatePickerButton = styled.button`
  min-width: 215px;
  height: 36px;
  text-align: left;
  margin-right: 5px;
  outline: none;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background: white;
  color: #464d52;
  font-size: 12px;
`;

const DatePickerInput = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ value, onClick }, ref) => (
    <DatePickerButton onClick={onClick} ref={ref}>
      {value}
    </DatePickerButton>
  )
);

export const datePickerProps: Partial<ReactDatePickerProps> = {
  dateFormat: 'yyyy년 MM월 dd일',
  maxDate: setMaxDate(),
  minDate: new Date('2021-03-11T00:00:00'),
  customInput: <DatePickerInput />,
  locale: ko,
  dayClassName: (date) =>
    getDay(date) === 6 ? 'saturday' : getDay(date) === 0 ? 'sunday' : '',
};
