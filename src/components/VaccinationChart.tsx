import styled from 'styled-components';
import { theme } from '../styles/theme';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { defualtChartOptions } from '../lib/chart/defaultChartOptions';

require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);

interface SeriesObj {
  firstCnt: number[][];
  secondCnt: number[][];
  totalFirstCnt: number[][];
  totalSecondCnt: number[][];
}

type propsType = {
  series: SeriesObj;
  sido: string;
  startDate: string | undefined;
  endDate: string | undefined;
  errorState: string;
};

function VaccinationChart({
  series,
  sido,
  startDate,
  endDate,
  errorState,
}: propsType) {
  const accumulatOptions = {
    defualtChartOptions,
    title: { text: '백신 접종 누적 통계' },
    subtitle: {
      text: `<span>${sido}</span><br/>
      <span>
      기간: ${startDate?.substr(0, 10)} - ${endDate?.substr(0, 10)}</span>`,
    },
    series: [
      {
        name: '누적 1차 접종',
        data: series.totalFirstCnt,
        color: `${theme.color.green}`,
        fillOpacity: 0.1,
      },
      {
        name: '누적 2차 접종',
        data: series.totalSecondCnt,
        color: `${theme.color.blue}`,
        fillOpacity: 0.2,
      },
    ],
  };

  const dailytOptions = {
    defualtChartOptions,
    title: { text: '백신 접종 일일 통계' },
    subtitle: {
      text: `<span>${sido}</span><br/>
      <span>
      기간: ${startDate?.substr(0, 10)} - ${endDate?.substr(0, 10)}</span>`,
    },
    series: [
      {
        name: '일일 1차 접종',
        type: 'column',
        data: series.firstCnt,
        color: `${theme.color.green}`,
      },
      {
        name: '일일 2차 접종',
        type: 'column',
        data: series.secondCnt,
        color: `${theme.color.blue}`,
      },
    ],
  };

  return (
    <ChartWrapper>
      <div>
        {errorState !== '' ? (
          errorState
        ) : (
          <HighchartsReact highcharts={Highcharts} options={accumulatOptions} />
        )}
      </div>
      <div>
        {errorState !== '' ? (
          errorState
        ) : (
          <HighchartsReact highcharts={Highcharts} options={dailytOptions} />
        )}
      </div>
    </ChartWrapper>
  );
}

export default VaccinationChart;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 510px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 430px;
  }

  div:first-child {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;
