
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
    primary: string;
    dark: string;
      light: string;
      highlight:string;
    };
    font: {
      main: string;
      small:string;
      medium:string;
      large:string;
      title:string;
    };
    breakpoints: {
    phone: string;
    tablet: string;
    miniLaptop: string;
    laptop: string;
  };

  }
}
