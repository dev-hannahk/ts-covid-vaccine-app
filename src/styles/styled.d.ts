// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      green: string;
      blue: string;
      grey: string;
      borderGrey: string;
      bgGreen: string;
      bgBlue: string;
      bgButton: string;
      titlePink: string;
      activeBorder: string;
      activeBg: string;
    };
  }
}
