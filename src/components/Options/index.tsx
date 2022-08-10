import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ThemeSwitcher } from "./components/ThemeSwithcer";
import './style/index.scss';

export const Options: React.FC = () => {
  const [ visibleMenu, setVisisbleMenu ] = useState<boolean>(false);

  const theme = useSelector((state: RootState) => state.theme);

  const clickedGalaxy = {
    transform: 'rotate(360deg)',
  }

  function openMenu() {
    setVisisbleMenu(!visibleMenu)
  }

  useEffect(() => {
    return setVisisbleMenu(false);
  },[])

  return (
    <div className="options">
      <img
        className="options__galaxy"
        src={`/images/galaxy--${theme}.svg`}
        onClick={openMenu}
        alt="galaxy"
        style={visibleMenu ? clickedGalaxy : {}}
      />
      
      <div
        className={`options__menu options__menu--${theme}`}
        style={visibleMenu ? {opacity: 1} : {}}
      >
        <ThemeSwitcher isVisible={visibleMenu} />
      </div>
    </div>
  )
}