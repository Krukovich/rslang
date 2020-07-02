import React from 'react';
import Btn from '../VocabularyBtn/vocabularyBtn';

const Posts = ({ posts }) => {
  return (
    <ul className="list-group mb-4">
      {posts.map(post => {

        return (
          <li key={post.id} className="list-group-item">
            <Btn src={post.audio} />
            <span className="mr-1 text-capitalize">{post.word}</span>
            <span className="mr-3">{post.transcription}</span>
            <span className="mr-5 text-capitalize">{post.wordTranslate}</span>
            <span className="mr-3">{post.textExample}</span>
            <img
              src={`https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/${post.image}`}
              className="rounded float-right"
              width="80px"
              alt={`${post.textExample}`}>
            </img>
          </li>
        )
      })}
    </ul>
  );
};

export default Posts