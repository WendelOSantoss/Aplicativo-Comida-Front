import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    lightTheme: Theme;
    darkTheme: Theme;
    bg: string;
  }
}
