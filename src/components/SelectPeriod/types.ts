type PERIOD_TITLE = '1주' | '1개월' | '3개월' | '전체' | '직접입력';

export interface periodListType {
  id: number;
  title: PERIOD_TITLE;
}

export const periodList: periodListType[] = [
  { id: 1, title: '1주' },
  { id: 2, title: '1개월' },
  { id: 3, title: '3개월' },
  { id: 4, title: '전체' },
  { id: 5, title: '직접입력' },
];
