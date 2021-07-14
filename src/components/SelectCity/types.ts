import { SidoType } from '../../redux/types';

export interface sidoListType {
  id: number;
  title: string;
  value: SidoType;
}

export const sidoList: sidoListType[] = [
  { id: 1, title: '전국', value: '전국' },
  { id: 2, title: '서울', value: '서울특별시' },
  { id: 3, title: '경기', value: '경기도' },
  { id: 4, title: '부산', value: '부산광역시' },
  { id: 5, title: '인천', value: '인천광역시' },
  { id: 6, title: '대전', value: '대전광역시' },
  { id: 7, title: '세종', value: '세종특별자치시' },
  { id: 8, title: '광주', value: '광주광역시' },
  { id: 9, title: '대구', value: '대구광역시' },
  { id: 10, title: '울산', value: '울산광역시' },
];
