import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import './style/index.scss'

export const Question: React.FC = () => {
  const theme: string = useSelector((state: RootState) => state.theme);

  return (
    <div className={`modal modal--${theme}`}>
      <div className={`modal__text modal__text--${theme}`}>
        <p>У вас уже есть аккаунт?</p>
      </div>
      <div className={`modal__buttons modal__buttons--${theme}`}>
        <Link to="/enter/login">
          Да
        </Link>
        <Link to="/enter/register">
          Нет
        </Link>
      </div>
    </div>
  )
} 