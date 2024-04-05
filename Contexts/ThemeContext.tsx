/**
 * @description: This file is used to manage the theme of the application.
 * The theme is set based on the device's color scheme.
 */
import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import { lightTheme, darkTheme } from '../Constants/Colors';

type Theme = typeof lightTheme;
type ThemeContextType = { theme: Theme };

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
      console.log('Color scheme has changed to', colorScheme);
    });

    return () => subscription.remove();
  }, [colorScheme]);

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
