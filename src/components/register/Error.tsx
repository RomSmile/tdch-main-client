import React from "react";
import './style/error.scss';

type Props = {
  textError: string,
}

export const Error:React.FC<Props> = ({ textError }) => {
  return (
    <div className="error">
      {textError}
    </div>
  );
}