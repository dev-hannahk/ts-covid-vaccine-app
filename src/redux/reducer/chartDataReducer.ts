import {
  ChartDataState,
  ChartDataAction,
  SET_DATA,
  SET_SIDO,
  SET_START_DATE,
  SET_END_DATE,
  SET_LOADING,
  SET_ERROR,
} from '../types';
import { getWeekDays, setMaxDate } from '../../functions/getDateFunctions';

const initialState: ChartDataState = {
  data: null,
  isLoading: false,
  error: '',
  sido: '전국',
  startDate: new Date(getWeekDays()),
  endDate: setMaxDate(),
};

const chartDataReducer = (
  state = initialState,
  action: ChartDataAction
): ChartDataState => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_SIDO:
      return {
        ...state,
        sido: action.payload,
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chartDataReducer;
