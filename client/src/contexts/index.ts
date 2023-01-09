import { createContext } from 'react';

interface ColorPackageType {
  primary: string;
  secondary: string;
  text: string;
}

interface ThemeContextType {
  light: ColorPackageType;
  dark: ColorPackageType;
}
const ThemeContext = createContext({} as ThemeContextType);

export { ThemeContext };
