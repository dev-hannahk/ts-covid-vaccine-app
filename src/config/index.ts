import { getWeekDays } from '../functions/getDateFunctions';

export const API_URL = 'https://api.odcloud.kr/api/15077756/v1/vaccine-stat';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_DATE = getWeekDays();
export const BASE_SIDO = '전국';
