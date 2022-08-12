import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark, setLight } from '../../actions/theme.js';
import { RootState } from "../../store.js";
import './styles/index.scss';
import moon from './images/moon.svg';
import sun from './images/sun.svg';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme)

  const handler = () => {
    if (theme === 'light') {
      dispatch(setDark())
    } else {
      dispatch(setLight())
    }
  }

  const clickedSwithcer = {
    left: '100%',
    transform: 'translateX(-97%)',
  }

  return (
    <>
      <div className={`switcher switcher--${theme}`} onClick={() => handler}>
        <img src={moon} alt="moon"/>
        <div
          className={`switcher__indicator switcher__indicator--${theme}`}
          style={theme === 'light' ? {} : clickedSwithcer}
        />
        <img src={sun} alt="sun"/>
      </div>
    </>
  )
}