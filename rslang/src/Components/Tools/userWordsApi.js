import * as Const from "../../constant";
import { getCookie } from "./getCookie";
import { connect } from "react-redux";
import { fetchAPI } from "./fetchAPI";

export const addMoreUserWords = async (countOfNewWords, levelOfWords = 3) => {
  const allUserWords = await fetchAPI("getAllUserWords");
  let arrayOfOldWordsId = [];
  let pageNow = 3;
  const newUserWords = await fetchAPI("words", { page: pageNow, group: levelOfWords }); //нужно настроить получение с редакса или с сервера настроек
  console.log("добавление новых слов: allUserWords", allUserWords, "newUserWords" , newUserWords)
  let i = 0;

  allUserWords.map((allUserWordObj) => {
      arrayOfOldWordsId.push(allUserWordObj.value.wordId);
    });

  newUserWords.map((newUserWordObj, count) => {
    if(count === 19) {
      pageNow++;
      
      
    }
    if (!arrayOfOldWordsId.includes(newUserWordObj.id) & i < countOfNewWords) {
      createUserWordsById(newUserWordObj.id);
      i++
    }
  });
};

function createUserWordsById(wordId, hard = false, deleted = false, coefficient = 1) {
  let obj = {
    "hard": hard,
    "delete": deleted,
    "coefficient": coefficient, 
}
  fetchAPI('createUserWordsById', obj, wordId).then(() => console.log("wordId ", wordId, " create"))
}
