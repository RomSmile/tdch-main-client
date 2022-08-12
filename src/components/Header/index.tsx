import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Options } from "../Options";
import './styles/index.scss';

export const Header:React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <header className="header">
      <img
        src={`/images/logo-${theme}.png`}
        alt="logo"
        className="header__logo"
      />
      <Options />
    </header>
  );
}