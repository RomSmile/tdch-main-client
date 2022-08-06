import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark, setLight } from '../../actions/theme.js';

type Props = {
  theme: 'light' | 'dark'
}

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(setLight())}>light</button>
      <button onClick={() => dispatch(setDark())}>dark</button>
    </>
  )
}