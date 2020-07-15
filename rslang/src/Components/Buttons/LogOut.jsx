import React from 'react';
import { Link } from "react-router-dom";
import { Translation } from 'react-i18next';

function logOut() {
  document.cookie = 'userId=zero; max-age=0';
}

export function LogOutBtn() {

  return (
    <Link to="/">
      <button
        type="button"
        className="btn btn_logout btn-primary"
        onClick={() => logOut()}
      >
        {<Translation>
          {
            (t) => <>{t('sidebar.9')}</>
          }
        </Translation>}
      </button>
    </Link>
  );
}
