// 날짜 문자열
export const getStringDate = (initDate: Date) => {
  const month = initDate.getMonth() + 1;
  const date = initDate.getDate();
  const setYear = initDate.getFullYear();
  const setMonth = month >= 10 ? month : `0${month}`;
  const setDate = date >= 10 ? date : `0${date}`;

  return `${setYear}-${setMonth}-${setDate}`;
};

// 시작날짜 끝날짜 차이
export const getPeriod = (endDate: Date, startDate: Date): number => {
  const gap =
    new Date(getStringDate(endDate)).getTime() -
    new Date(getStringDate(startDate)).getTime();
  const period = Math.floor(gap / (1000 * 60 * 60 * 24));

  return period + 1;
};

// 시작날짜
// 질본 최종 업데이트 날짜 : 7월 12일
// const defaultMaxDate = new Date('2021-07-12T00:00:00');
const now = new Date();
// 일주일
export const getWeekDays = () => {
  const setStartDate = now.getTime() - 7 * 24 * 60 * 60 * 1000;
  const basicStartDate = new Date(setStartDate);

  return getStringDate(basicStartDate);
};

// 한 달
export const getMonthDays = () => {
  const setStartDate = now.getTime() - 30 * 24 * 60 * 60 * 1000;
  const basicStartDate = new Date(setStartDate);

  return getStringDate(basicStartDate);
};

// 세 달
export const getQuarterDays = () => {
  const setStartDate = now.getTime() - 90 * 24 * 60 * 60 * 1000;
  const basicStartDate = new Date(setStartDate);

  return getStringDate(basicStartDate);
};

// 오전 10시 기준 최대 날짜
export const setMaxDate = () => {
  if (now.getHours() < 10) return new Date(now.setDate(now.getDate() - 1));
  return now;
};
