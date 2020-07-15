import * as Const from "../../constant";
import { getCookie } from "./getCookie";
import { connect } from "react-redux";
import { fetchAPI } from "./fetchAPI";

export const addMoreUserWords = async (countOfNewWords, levelOfWords = 4) => {
  const allUserWords = await fetchAPI("getAllUserWords");
  let arrayOfOldWordsId = [];
  let pageNow = 4;
  allUserWords.map((allUserWordObj) => {
    arrayOfOldWordsId.push(allUserWordObj.value.wordId);
  });
  while (
    checkAndAddNewWords(
      pageNow,
      levelOfWords,
      arrayOfOldWordsId,
      countOfNewWords
    ) === false
  ) {
    pageNow++;
  }
};

const checkAndAddNewWords = async (
  page,
  group,
  arrayOfOldWordsId,
  countOfNewWords
) => {
  let i = 0;
  const newUserWords = await fetchAPI("words", {
    page: page,
    group: group,
  });
  newUserWords.map((newUserWordObj, count) => {
    if (count === 19) {
      return false;
    }
    if (
      !arrayOfOldWordsId.includes(newUserWordObj.id) &
      (i < countOfNewWords)
    ) {
      createUserWordsById(newUserWordObj.id);
      // console.log("get word info", getWordsById(newUserWordObj.id));
      i++;
      console.log("i", i);
    }
    if (i + 1 === countOfNewWords) {
      return true;
    } else {
      return false;
    }
  });
};

function createUserWordsById(
  wordId,
  hard = false,
  deleted = false,
  coefficient = 1
) {
  let obj = {
    hard: hard,
    delete: deleted,
    coefficient: coefficient,
  };
  fetchAPI("createUserWordsById", obj, wordId).then(() =>
    console.log("wordId ", wordId, " create")
  );
}

export const getWordsById = async (wordId) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words/${wordId}?noAssets=true`, {
    method: "GET",
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const content = await rawResponse.json();
  return content;
};

