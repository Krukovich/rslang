import * as Const from "../../constant";
import { getCookie } from "../../Components/Tools/GetCoocke";
import { connect } from "react-redux";

export const fetchAPI = async (query, obj) => {
  console.log("fetchAPI start query" + query);

  if (query === "signin") {
    const rawResponse = await fetch(Const.API_LINK + query, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const content = await rawResponse.json();
    return content;
  }
  if (query === "words") {
    const rawResponse = await fetch(
      Const.API_LINK + query + "?page=" + obj.page + "&group=" + obj.group 
    );
    const content = await rawResponse.json();
    return content;
    
  }
  if (query === "users-set-statistics") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/statistics`,
      {
        method: "PUT",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          learnedWords: 999,
          optional: {
            "minigames": [
              {
                gamename: 'audiocall',
                statistics: [obj]
              }
            ]        
        }
      })
    })
    const content = await rawResponse.json();
    return content;
  }

  if(query === 'setSettings'){
    const rawResponse = await fetch(Const.API_LINK + `users/${getCookie('userId')}/settings`,{
      method: 'PUT',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "optional": obj
      })
    })
    const content = await rawResponse.json();
    console.log(content)
    return content;
  }
  if(query === 'getSettings'){
    const rawResponse = await fetch(Const.API_LINK + `users/${getCookie('userId')}/settings`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
        'Accept': 'application/json',
      }
    });
    const content = await rawResponse.json()
    console.log(content.optional)
    // return content;
  }
  // ADDYOUR
};
