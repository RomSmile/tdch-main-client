import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Options } from "../Options";
import './styles/index.scss';

type Props = {
  isQuestion?: boolean
}

export const Header:React.FC<Props> = ({ isQuestion }) => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <header className="header">
      <img
        src={`/images/logo-${theme}.png`}
        alt="logo"
        className="header__logo"
        style={isQuestion ? { visibility: 'hidden' } : {}}
      />
      <Options />
    </header>
  );
}