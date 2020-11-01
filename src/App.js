import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import Component from './components/Component';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark.css`,
  light: `${process.env.PUBLIC_URL}/light.css`,
};

function App() {
  return (
    <ThemeSwitcherProvider
      defaultTheme="light"
      insertionPoint="inject-styles-here"
      themeMap={themes}
    >
      <Component />
    </ThemeSwitcherProvider>
  );
}

export default App;
