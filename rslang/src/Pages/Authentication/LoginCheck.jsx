import React from 'react';
import { Route , Redirect} from 'react-router-dom';

export  const CheckLogin = () => {
    if (getCookie("userId") !== undefined) {
      return true;
    }
    return false;
  }


  const getCookie = (name) => {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }