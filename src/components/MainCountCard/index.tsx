import { theme } from '../../styles/theme';
import { VaccineStatModel } from '../../redux/types';
import { CountWrapper, Count, CountBox, BasicDate } from './styles';

type propsType = {
  dataList: VaccineStatModel[] | undefined;
  isFetchFailed: string;
};

function MainCountCard({ dataList, isFetchFailed }: propsType) {
  const latestCardInfo = dataList?.[dataList?.length - 1];
  const totalFirstCntInfo = latestCardInfo?.totalFirstCnt.toLocaleString();
  const totalSecondCntInfo = latestCardInfo?.totalSecondCnt.toLocaleString();
  const firstCntInfo = latestCardInfo?.firstCnt.toLocaleString();
  const secondCntInfo = latestCardInfo?.secondCnt.toLocaleString();
  const basicDate = latestCardInfo?.baseDate.substr(0, 16);

  return (
    <CountWrapper theme={theme}>
      {isFetchFailed !== '' ? (
        isFetchFailed
      ) : (
        <>
          <Count>
            <CountBox first theme={theme}>
              <span>1차 접종 완료</span>
              <span>{totalFirstCntInfo}</span>
              <div>▲ {firstCntInfo}</div>
            </CountBox>
            <CountBox theme={theme}>
              <span>2차 접종 완료</span>
              <span>{totalSecondCntInfo}</span>
              <div>▲ {secondCntInfo}</div>
            </CountBox>
          </Count>
          <BasicDate theme={theme}>{basicDate} 기준</BasicDate>
        </>
      )}
    </CountWrapper>
  );
}

export default MainCountCard;
