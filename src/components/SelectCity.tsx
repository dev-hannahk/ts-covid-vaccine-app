import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useDispatch } from 'react-redux';
import { setCalendarData } from '../redux/actions/chartActions';
import useDate from '../hooks/useDate';

function SelectCity() {
  const { period, startDateString } = useDate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setCalendarData(period, startDateString, value));
  };

  return (
    <SelectCityWrapper>
      <SelectBox
        theme={theme}
        name='sido'
        id='sido-select'
        onChange={handleChange}
      >
        <option value='전국'>전국</option>
        <option value='서울특별시'>서울</option>
        <option value='경기도'>경기</option>
        <option value='부산광역시'>부산</option>
        <option value='인천광역시'>인천</option>
        <option value='대전광역시'>대전</option>
        <option value='세종특별자치시'>세종</option>
        <option value='광주광역시'>광주</option>
        <option value='대구광역시'>대구</option>
        <option value='울산광역시'>울산</option>
      </SelectBox>
    </SelectCityWrapper>
  );
}

export default SelectCity;

const SelectCityWrapper = styled.div``;

const SelectBox = styled.select`
  width: 60px;
  height: 36px;
  outline: none;
  border-color: ${({ theme }) => theme.color.borderGrey};
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.grey};
  margin: 0 8px 20px 0;
  padding-left: 8px;
`;
