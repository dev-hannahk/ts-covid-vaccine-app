import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useDispatch } from 'react-redux';
import useDate from '../hooks/useDate';
import {
  getWeekDays,
  getQuarterDays,
  getMonthDays,
  getStringDate,
  setMaxDate,
} from '../functions/getDateFunctions';
import {
  setDaysOption,
  setStartDateState,
  setEndDateState,
} from '../redux/actions/chartActions';

interface periodListType {
  id: number;
  title: string;
}

const periodList: periodListType[] = [
  { id: 1, title: '1주' },
  { id: 2, title: '1개월' },
  { id: 3, title: '3개월' },
  { id: 4, title: '전체' },
  { id: 5, title: '직접입력' },
];

type propsType = {
  hideDatePicker: () => void;
  toggleDatePicker: () => void;
};

function SelectPeriod({ hideDatePicker, toggleDatePicker }: propsType) {
  const [state, setState] = useState<number>(1);
  const dispatch = useDispatch();
  const { initialSido } = useDate();

  const handleButtonClick = (list: periodListType) => {
    setState(list.id);
    hideDatePicker();
    dispatch(setEndDateState(setMaxDate()));
    switch (list.title) {
      case '1주':
        dispatch(setStartDateState(new Date(getWeekDays())));
        dispatch(setDaysOption(getWeekDays(), initialSido));
        break;
      case '1개월':
        dispatch(setStartDateState(new Date(getMonthDays())));
        dispatch(setDaysOption(getMonthDays(), initialSido));
        break;
      case '3개월':
        dispatch(setStartDateState(new Date(getQuarterDays())));
        dispatch(setDaysOption(getQuarterDays(), initialSido));
        break;
      case '전체':
        dispatch(setStartDateState(new Date('2021-03-11T00:00:00')));
        dispatch(
          setDaysOption(
            getStringDate(new Date('2021-03-11T00:00:00')),
            initialSido
          )
        );
        break;
      case '직접입력':
        toggleDatePicker();
        break;
      default:
        break;
    }
  };

  return (
    <PeriodWrapper>
      {periodList.map((list) => (
        <Button
          key={list.id}
          onClick={() => handleButtonClick(list)}
          selected={list.id === state}
          custom={list.id === 5}
          theme={theme}
        >
          {list.title}
        </Button>
      ))}
    </PeriodWrapper>
  );
}

export default SelectPeriod;

const PeriodWrapper = styled.div``;

interface ButtonStyled {
  selected?: boolean;
  custom?: boolean;
}

const Button = styled.button<ButtonStyled>`
  width: ${(props) => (props.custom ? '72px' : '52px')};
  height: 36px;
  background: ${(props) =>
    props.selected ? props.theme.color.bgGreen : 'white'};
  margin-right: 8px;
  outline: none;
  border: 1px solid;
  border-color: ${(props) =>
    props.selected ? props.theme.color.green : props.theme.color.borderGrey};
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) =>
    props.selected ? props.theme.color.green : props.theme.color.grey};
  font-weight: 600;
  font-size: 12px;

  @media screen and (max-width: 420px) {
  }
`;
