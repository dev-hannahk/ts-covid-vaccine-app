import React from 'react';
import { theme } from '../../styles/theme';
import { useDispatch } from 'react-redux';
import { setCalendarData } from '../../redux/actions/chartActions';
import useDate from '../../hooks/useDate';
import { SidoType } from '../../redux/types';
import { SelectCityWrapper, SelectBox } from './styles';
import { sidoList } from './types';

function SelectCity() {
  const { period, startDateString } = useDate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setCalendarData(period, startDateString, value as SidoType));
  };

  return (
    <SelectCityWrapper>
      <SelectBox
        theme={theme}
        name='sido'
        id='sido-select'
        onChange={handleChange}
      >
        {sidoList.map((sido) => (
          <option key={sido.id} value={sido.value}>
            {sido.title}
          </option>
        ))}
      </SelectBox>
    </SelectCityWrapper>
  );
}

export default SelectCity;
