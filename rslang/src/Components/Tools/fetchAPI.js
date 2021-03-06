import * as Const from "../../constant";
import { getCookie } from "./getCookie";
import { getWords } from '../../service';

export const fetchAPI = async (query, obj, wordId) => {
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

  if (query === "users") {
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
    if (obj.count !== undefined) {
      return getWords(obj.group, obj.count);
    }
    const rawResponse = await fetch(
      Const.API_LINK + query + "?page=" + obj.page + "&group=" + obj.group
    );
    const content = await rawResponse.json();
    return content;
  }

  if (query === "getAllUserWords") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words/`,
      {
        method: "GET",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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
        body: JSON.stringify(obj.word),
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
        body: JSON.stringify(obj.word),
      }
    );
    const content = await rawResponse.json();
    return content;
  }

  if (query === "users-get-statistics") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/statistics`,
      {
        method: "GET",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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
          learnedWords: 0,
          optional: obj,
        }),
      }
    );
    const content = await rawResponse.json();
    return content;
  }

  if (query === "users-set-start-statistics") {
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
            statsSavanna: { 0: 0 },
            gamePuzzle: { 0: 0 },
            audioCall: { 0: 0 },
            speakIt: { 0: 0 },
            sprintGame: { 0: 0 },
            fortuneGame: { 0: 0 },
            appStats: { 0: 0 },
          },
        }),
      }
    );
    const content = await rawResponse.json();
    return content;
  }

  if (query === "setSettingsStart") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/settings`,
      {
        method: "PUT",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          optional: {
            level: 1,
            playExampleSound: true,
            showTranslateWord: true,
            showExampleString: true,
            showExplanationString: true,
            showWordTranscription: true,
            showWordImage: true,
            showBtnShowAgreeAnswer: true,
            showBtnDeleteWord: true,
            showBtnDifficultWord: true,
            newWordsCount: 20,
          },
        }),
      }
    );
  }

  if (query === "setSettings") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/settings`,
      {
        method: "PUT",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          optional: obj,
        }),
      }
    );

    return rawResponse;
  }
  if (query === "getSettings") {
    try {
      const rawResponse = await fetch(
        Const.API_LINK + `users/${getCookie("userId")}/settings`,
        {
          method: "GET",
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
            Accept: "application/json",
          },
        }
      );
      const content = await rawResponse.json();
      return content.optional;
    } catch (err) {
      console.log(
        "Ошбика, настройки установлены по умолчанию. Попробуйте еще раз."
      );
      return {
        level: 1,
        playExampleSound: true,
        showTranslateWord: true,
        showExampleString: true,
        showExplanationString: true,
        showWordTranscription: true,
        showWordImage: true,
        showBtnShowAgreeAnswer: true,
        showBtnDeleteWord: true,
        showBtnDifficultWord: true,
        newWordsCount: 10,
      };
    }
  }
  
  if (query === "getAllUserWords") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words`,
      {
        method: "GET",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const content = await rawResponse.json();
    return content;
  }

  if (query === "createUserWordsById") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words/${wordId}`,
      {
        method: "POST",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "difficulty": "string",
          "optional": obj,
        }),
      }
    );
    const content = await rawResponse.json();
    return content;
  }

  if (query === "putUserWordsById") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words/${wordId}`,
      {
        method: "POST",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "difficulty": "string",
          "optional": obj,
        }),
      }
    );
    const content = await rawResponse.json();
    return content;
  }

  if (query === "updateUserWordsById") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words/${wordId}`,
      {
        method: "PUT",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "difficulty": "string",
          "optional": obj,
        }),
      }
    );
    const content = await rawResponse.json();
    return content;
  }

  if (query === "getUserWordsById") {
    const rawResponse = await fetch(
      Const.API_LINK + `users/${getCookie("userId")}/words/${wordId}`,
      {
        method: "GET",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "difficulty": "string",
          "optional": obj,
        }),
      }
    );
    const content = await rawResponse.json();
    return content;
  }
};
