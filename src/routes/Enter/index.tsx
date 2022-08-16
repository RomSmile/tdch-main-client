import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import './styles/index.scss';


export const Enter:React.FC = () => {
  const [ isQuestion, setIsQuestion ] = useState<boolean>(false)
  const location = useLocation();

  useEffect(() => {
    if (
      !location.pathname.includes('login')
        && !location.pathname.includes('register')
    ) {
      setIsQuestion(true)
    } else {
      setIsQuestion(false)
    }
  }, [location.pathname])

  return (
    <div className="enter">
      <header className="enter__header">
        <Header isQuestion={isQuestion} />
      </header>
      <div className="enter__container">
        <Outlet />
      </div>
    </div>
  )
}