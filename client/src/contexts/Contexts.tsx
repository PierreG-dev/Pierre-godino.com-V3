import { FC, createContext } from 'react';

interface ColorPackageType {
  primary: string;
  secondary: string;
  text: string;
}

interface ThemeContextType {
  light: ColorPackageType;
  dark: ColorPackageType;
}

const ThemeContext = createContext<ThemeContextType>(null);

export const RoutingContext = createContext({});

export const Contexts: FC = ({ children }) => {
  return (
    <ThemeContext.Provider
      value={{
        light: {
          primary: '',
          secondary: '',
          text: '',
        },
        dark: {
          primary: '',
          secondary: '',
          text: '',
        },
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
