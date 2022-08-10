import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ThemeSwitcher } from "../../components/ThemeSwithcer";
import './styles/index.scss';


export const Enter:React.FC = () => {

  return (
    <div className="enter">
      <header className="enter__header">
        <Header />
      </header>
      <div className="enter__container">
        <Outlet />
      </div>
    </div>
  )
}