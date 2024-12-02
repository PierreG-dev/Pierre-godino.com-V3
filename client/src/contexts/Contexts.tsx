import { FC, createContext, useMemo } from 'react';
import StarsBackground from '../components/Layout/background/StarsBackground';

interface ColorPackageType {
  primary: string;
  secondary: string;
  text: string;
}

interface ThemeContextType {
  light: ColorPackageType;
  dark: ColorPackageType;
}

interface BackgroundContextType {
  background?: Element;
}

const ThemeContext = createContext<ThemeContextType>(null);

export const RoutingContext = createContext({});

export const BackgroundContext = createContext<BackgroundContextType>({
  background: undefined,
});

export const Contexts: FC = ({ children }) => {
  const background: Element = useMemo(
    () => (<StarsBackground />) as unknown as Element,
    []
  );

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
      <BackgroundContext.Provider value={{ background: background }}>
        {children}
      </BackgroundContext.Provider>
    </ThemeContext.Provider>
  );
};
