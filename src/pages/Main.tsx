import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  setStartDateState,
  setDaysOption,
} from '../redux/actions/chartActions';
import { VaccineStatModel } from '../redux/types';
import ChartDatePicker from '../components/ChartDatePicker';
import SelectCity from '../components/SelectCity';
import VaccinationChart from '../components/VaccinationChart';
import MainCountCard from '../components/MainCountCard';
import SelectPeriod from '../components/SelectPeriod';
import { getChartSeries } from '../functions/getChartSeries';
import { getWeekDays } from '../functions/getDateFunctions';

const API_URL = 'https://api.odcloud.kr/api/15077756/v1/vaccine-stat';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_DATE = getWeekDays();
const BASE_SIDO = '전국';

function Main() {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [latestData, setLatestData] = useState<VaccineStatModel[]>([]);
  const [isFetchFailed, setIsFetchFailed] = useState<string>('');
  const state = useSelector((state: RootState) => state.chartDataReducer);
  const dispatch = useDispatch();
  const errorState = state.error;
  const dataList = state.data?.data;
  const series = getChartSeries(state.data?.data || []);
  const dateList = dataList?.map((v) => v.baseDate);
  const startDate = dateList?.[0];
  const endDate = dateList?.[dateList.length - 1];
  const sido = state.sido;

  useEffect(() => {
    axios
      .get(
        `${API_URL}?page=1&perPage=${1000}&cond[baseDate::GTE]=${BASE_DATE}&cond[sido::EQ]=${BASE_SIDO}&serviceKey=${API_KEY}`
      )
      .then((res) => res.data)
      .then((res) => setLatestData(res.data))
      .catch((err) => setIsFetchFailed(err.message));

    dispatch(setDaysOption(BASE_DATE, BASE_SIDO));
    dispatch(setStartDateState(new Date(BASE_DATE)));
  }, [dispatch]);

  const toggleDatePicker = () => {
    setIsSelected(!isSelected);
  };

  const hideDatePicker = () => {
    setIsSelected(false);
  };

  return (
    <MainPage>
      <MainCountCard dataList={latestData} isFetchFailed={isFetchFailed} />
      <MainChartWrapper theme={theme}>
        <OptionWrapper>
          <SelectCity />
          <SelectPeriod
            hideDatePicker={hideDatePicker}
            toggleDatePicker={toggleDatePicker}
          />
        </OptionWrapper>
        {isSelected && <ChartDatePicker />}
        <VaccinationChart
          series={series}
          sido={sido}
          startDate={startDate}
          endDate={endDate}
          errorState={errorState}
        />
      </MainChartWrapper>
    </MainPage>
  );
}

export default Main;

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const MainChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  min-height: 940px;
  border: 1px solid ${({ theme }) => theme.color.borderGrey};
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;
`;

const OptionWrapper = styled.div`
  display: flex;
  height: 45px;
  margin: 15px 0 0 20px;
`;
