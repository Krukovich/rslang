import React from 'react';
import PlayBtn from '../VocabularyBtn/PlayBtn.jsx';
import RemoveBtn from '../VocabularyBtn/RemoveBtn.jsx';
import { removeTagsFromString } from '../../../service';
import '../WordsToLearn/WordsToLearn.scss'


const WordsToLearn = ({ posts, remove }) => {
  return (
    <ul className="list-group mb-4">
      {posts.map((post, index) => {

        return (
            <li key={post.id} className="d-flex list-group-item justify-content-between align-items-center">

              <div className="d-flex justify-content-start align-items-center">
                <div className="btns">
                  <RemoveBtn index={index} remove={remove} />
                  <PlayBtn src={post.audio} />
                </div>
                <div className="words">
                  <span className="mr-3 mb-2 text-capitalize">{post.word}</span>
                  <span className="mr-3 mb-2">{post.transcription}</span>
                  <span className="text-capitalize mr-3">{post.wordTranslate}</span>
                </div>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-2">
                <span className="mr-3 mb-3">{removeTagsFromString(post.textExample)}</span>
                <span className="mr-3">{post.textExampleTranslate}</span>
              </div>

              <div className="d-flex justify-content-end">
                <img
                  src={`https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/${post.image}`}
                  className="rounded float-right"
                  width="100px"
                  alt={`${post.textExample}`}>
                </img>
              </div>

            </li>
        )
      })}
    </ul>
  );
};


export default WordsToLearn
