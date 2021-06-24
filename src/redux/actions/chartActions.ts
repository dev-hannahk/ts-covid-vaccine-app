import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  VaccineStatModelData,
  ChartDataAction,
  SET_DATA,
  SET_SIDO,
  SET_START_DATE,
  SET_END_DATE,
  SET_LOADING,
  SET_ERROR,
} from '../types';

const API_URL = 'https://api.odcloud.kr/api/15077756/v1/vaccine-stat';
const API_KEY = process.env.REACT_APP_API_KEY;

export const setCalendarData =
  (
    gap: number,
    date: string,
    sido: string
  ): ThunkAction<void, RootState, null, ChartDataAction> =>
  async (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    dispatch({
      type: SET_SIDO,
      payload: sido,
    });
    try {
      const res = await axios.get(
        `${API_URL}?page=1&perPage=${gap}&cond[baseDate::GTE]=${date}&cond[sido::EQ]=${sido}&serviceKey=${API_KEY}`
      );
      const data: VaccineStatModelData = res.data;

      dispatch({ type: SET_DATA, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

export const setDaysOption =
  (
    date: string,
    sido: string
  ): ThunkAction<void, RootState, null, ChartDataAction> =>
  async (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    dispatch({
      type: SET_SIDO,
      payload: sido,
    });
    try {
      const res = await axios.get(
        `${API_URL}?page=1&perPage=${1000}&cond[baseDate::GTE]=${date}&cond[sido::EQ]=${sido}&serviceKey=${API_KEY}`
      );

      dispatch({ type: SET_DATA, payload: res.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

export const setStartDateState = (date: Date): ChartDataAction => {
  return {
    type: SET_START_DATE,
    payload: date,
  };
};

export const setEndDateState = (date: Date): ChartDataAction => {
  return {
    type: SET_END_DATE,
    payload: date,
  };
};
