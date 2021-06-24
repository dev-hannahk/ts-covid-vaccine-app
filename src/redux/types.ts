export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_SIDO = 'SET_SIDO';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_ERROR = 'SET_ERROR';

export interface VaccineStatModel {
  accumulatedFirstCnt: number;
  accumulatedSecondCnt: number;
  baseDate: string;
  firstCnt: number;
  secondCnt: number;
  sido: string;
  totalFirstCnt: number;
  totalSecondCnt: number;
}

export interface VaccineStatModelData {
  currentCount: number;
  data: VaccineStatModel[];
  matchCount: number;
  page: number;
  perPage: number;
  totalCount: number;
}

export interface ChartDataState {
  data: VaccineStatModelData | null;
  isLoading: boolean;
  error: string;
  sido: string;
  startDate: Date;
  endDate: Date;
}

export interface GetChartDataAction {
  type: typeof SET_DATA;
  payload: VaccineStatModelData;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export interface SetCityAction {
  type: typeof SET_SIDO;
  payload: string;
}

export interface SetStartDateAction {
  type: typeof SET_START_DATE;
  payload: Date;
}

export interface SetEndDateAction {
  type: typeof SET_END_DATE;
  payload: Date;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type ChartDataAction =
  | GetChartDataAction
  | SetLoadingAction
  | SetCityAction
  | SetStartDateAction
  | SetEndDateAction
  | SetErrorAction;
