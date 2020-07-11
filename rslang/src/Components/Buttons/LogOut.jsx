import React from 'react';
import { Link } from "react-router-dom";

function logOut() {
  document.cookie = 'userId=zero; max-age=0';
}

export function LogOutBtn() {

  return (
    <Link to="/">
      <button
        type="button"
        className="btn btn_logout btn-rslang"
        onClick={() => logOut()}
      >
        Выход
      </button>
    </Link>
  );
}
