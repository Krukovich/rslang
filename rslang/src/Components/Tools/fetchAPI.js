import * as Const from "../../constant";
import { getCookie } from "../../Components/Tools/GetCoocke";

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

  if (query === "getAllUserWords") {
    const rawResponse = await fetch(
      Const.API_LINK +  `users/${getCookie("userId")}/words/`,
      {
        method: "GET",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        }
    }
    );
    const content = await rawResponse.json();
    return Promise.allSettled(content).then((wordLists) => wordLists.flat());
    return content; 
  }

 
  if (query === "setNewUserWordById") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words/` + obj.wordId,
      {
        method: "POST",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj.word)
    }
      );
    const content = await rawResponse.json();
    return content; 
  }

  if (query === "setUserWordById") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words/` + obj.wordId,
      {
        method: "PUT",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj.word)
    }
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

  //Add yours
};
