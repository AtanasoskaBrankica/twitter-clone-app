import React, {useCallback, useState} from 'react';

interface ContextValues {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const CustomThemeContext = React.createContext<ContextValues>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const CustomThemeContextConstructor = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const toggleTheme = useCallback(() => {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  }, [theme]);

  const value = React.useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <CustomThemeContext.Provider value={value}>
      {children}
    </CustomThemeContext.Provider>
  );
};
