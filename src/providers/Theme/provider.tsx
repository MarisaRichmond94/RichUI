import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { DefaultTheme } from './DefaultTheme';
import { Theme } from './types';

// Context
interface ThemeContextProps {
  theme: Partial<Theme>,
};

const ThemeContext = createContext<undefined | ThemeContextProps>(undefined);

// Provider
interface ThemeProviderProps extends PropsWithChildren {
  theme?: Partial<Theme>,
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = DefaultTheme,
}) => (
  <ThemeContext.Provider value={{ theme }}>
    {children}
  </ThemeContext.Provider>
);

// Hook
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme should only be used within the ThemeProvider');
  }

  return context;
};

export {
  ThemeContext,
  ThemeProvider,
  useTheme,
};
