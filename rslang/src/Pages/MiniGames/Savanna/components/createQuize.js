import React from "react";
import { fetchAPI } from "../../../../Components/Tools/fetchAPI";
import * as Const from "../../../../constant";
import { getRandomPage } from "../../../../service";

export const createQuize = async (wordsArray) => {
  function shuffle(array) {
    let arr = array.slice(0);
    arr = arr.concat(array).concat(array).concat(array);
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function generateRandomArr(wordsArr) {
    let newWordArr = [];
    for (let i = 0; i < 10; i += 1) {
      let num = Math.floor(Math.random() * Math.floor(wordsArr.length));
      let word = wordsArr[num];

      if (!newWordArr.includes(word)) {
        newWordArr.push(word);
      }
      function shuffle(array) {
        let arr = array.slice(0);
        arr = arr.concat(array).concat(array).concat(array);
        // console.log(arr)
        arr.sort(() => Math.random() - 0.5);
        return arr
      }
      function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }

      function generateRandomArr(wordsArr) {
        let newWordArr = [];
        for (let i = 0; i < 10; i += 1) {
          let num = Math.floor(Math.random() * Math.floor(wordsArr.length));
          let word = wordsArr[num];

          if (!newWordArr.includes(word)) {
            newWordArr.push(word);
          }
        }
        return newWordArr
      }



      shuffle(wordsArray);
      let levelArray = [];
      let tempArray = [];
      let answerId = 3;
      for (let i = 0; i < 20; i++) {
        // tempArray = wordsArray.slice(i * 5, (i * 5) + 5);
        tempArray = generateRandomArr(wordsArray);
        answerId = randomInteger(0, 4);
        levelArray.push(
          {
            question: tempArray[answerId].word,
            rightAnswerId: answerId,
            answers: [
              { text: tempArray[0].wordTranslate, id: 0 },
              { text: tempArray[1].wordTranslate, id: 1 },
              { text: tempArray[2].wordTranslate, id: 2 },
              { text: tempArray[3].wordTranslate, id: 3 },
              { text: tempArray[4].wordTranslate, id: 4 }
            ]
          }
        )
      }
      return newWordArr;
    }

    shuffle(wordsArray);
    let levelArray = [];
    let tempArray = [];
    let answerId = 3;
    for (let i = 0; i < 20; i++) {
      // tempArray = wordsArray.slice(i * 5, (i * 5) + 5);
      tempArray = generateRandomArr(wordsArray);
      answerId = randomInteger(0, 4);
      levelArray.push({
        question: tempArray[answerId].word,
        rightAnswerId: answerId,
        answers: [
          { text: tempArray[0].wordTranslate, id: 0 },
          { text: tempArray[1].wordTranslate, id: 1 },
          { text: tempArray[2].wordTranslate, id: 2 },
          { text: tempArray[3].wordTranslate, id: 3 },
          { text: tempArray[4].wordTranslate, id: 4 },
        ],
      });
    }
    return levelArray;
  };
};
