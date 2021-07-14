import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }
  body{
    width:100vw;
    min-height:100vh;
    background-color: #FAFAFA;
    overflow-x: hidden;
  }

  #root{
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding:40px 0 20px 0;
  }

  // Date Picker Custom
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__day--selected:hover {
    background-color: #2FB32F;
  }

`;

export default GlobalStyle;
