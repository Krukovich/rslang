import React from 'react';
import { fetchAPI } from "../../../../Components/Tools/fetchAPI";
import * as Const from "../../../../constant";
import { getRandomPage } from '../../../../service';

export const createQuize = async (level)  => {
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
    const wordsArray = await fetchAPI ('words', 
    {
        page: getRandomPage(Const.MAX_PAGE), 
        group: level
    }); 
    shuffle(wordsArray);
    let levelArray = [];
    let tempArray = [];
    let answerId = 3;
    for (let i = 0; i < 3; i++) {        
        tempArray = wordsArray.slice(i*5, (i*5)+5);
        answerId = randomInteger(0, 4);
        levelArray.push(
            {                
                question: tempArray[answerId].word,
                rightAnswerId: answerId,
                answers: [
                    {text: tempArray[0].wordTranslate, id: 0},
                    {text: tempArray[1].wordTranslate, id: 1},
                    {text: tempArray[2].wordTranslate, id: 2},
                    {text: tempArray[3].wordTranslate, id: 3},
                    {text: tempArray[4].wordTranslate, id: 4}
                  ]
            }
        )
    }
    return levelArray
}
