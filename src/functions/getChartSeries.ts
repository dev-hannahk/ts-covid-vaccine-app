import { VaccineStatModel } from '../redux/types';

export const getChartSeries = (data: VaccineStatModel[]) => {
  const totalFirstCnt = data.map((data) => [
    new Date(data.baseDate).getTime() + 32400000,
    data.totalFirstCnt,
  ]);
  const totalSecondCnt = data.map((data) => [
    new Date(data.baseDate).getTime() + 32400000,
    data.totalSecondCnt,
  ]);
  const firstCnt = data.map((data) => [
    new Date(data.baseDate).getTime() + 32400000,
    data.firstCnt,
  ]);
  const secondCnt = data.map((data) => [
    new Date(data.baseDate).getTime() + 32400000,
    data.secondCnt,
  ]);
  return { totalFirstCnt, totalSecondCnt, firstCnt, secondCnt };
};
