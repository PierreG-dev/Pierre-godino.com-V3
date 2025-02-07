import { FC, ReactNode, createContext, useMemo } from 'react';
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
  background?: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>(null);

export const RoutingContext = createContext({});

export const BackgroundContext = createContext<BackgroundContextType>({
  background: undefined,
});

export const Contexts: FC<{ children: any }> = ({ children }) => {
  const background: ReactNode = useMemo(
    () => (<StarsBackground />) as unknown as ReactNode,
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
