import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getStringDate, getPeriod } from '../functions/getDateFunctions';

function useDate() {
  const initialStartDate = useSelector(
    (state: RootState) => state.chartDataReducer.startDate
  );
  const initialEndDate = useSelector(
    (state: RootState) => state.chartDataReducer.endDate
  );
  const initialSido = useSelector(
    (state: RootState) => state.chartDataReducer.sido
  );

  const period = getPeriod(initialEndDate, initialStartDate);
  const startDateString = getStringDate(initialStartDate);
  const startEndString = getStringDate(initialEndDate);

  return {
    initialStartDate,
    initialEndDate,
    initialSido,
    period,
    startDateString,
    startEndString,
  };
}

export default useDate;
