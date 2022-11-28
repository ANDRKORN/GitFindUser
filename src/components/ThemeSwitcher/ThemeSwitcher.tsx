import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg'
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg'
import React, { useState } from "react";

export const ThemeSwitcher = () => {
    const [isTheme, setTheme] = useState(false);
    const themeText = isTheme ? 'Light' : 'Dark';
    const ThemeIcon = isTheme ? SunIcon : MoonIcon;
    return (
      <div
          className={styles.switcher}
          onClick={() => setTheme(prevTheme => {
              document.body.setAttribute('data-theme', (!prevTheme) ? 'dark' : 'light')
              return !prevTheme
          })
      }
      >
          <span>{themeText}</span>
          <ThemeIcon  className={styles.icon} />
      </div>
    )
};
