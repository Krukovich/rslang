import React, { useState } from 'react';
import wordCards from './vocabulary-data';
import Btn from './vocabularyBtn/vocabularyBtn';
// import Posts from './Posts';


const Vocabulary = () => {
  // const [posts, setPosts] = useState([]);
  const [currentLanguageLevel, setCurrentLanguageLevel] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostPerPage] = useState(30);

  // const res = [];
  // wordCards[currentLanguageLevel].map((post) => {
  //   res.push(post)
  // })
  // setPosts(res);
  // console.log(res)
  // posts.map(post => {
  //   let arr = [];
  //   arr.push(post.word);
  //   console.log(arr.length)
  // })

  const listItem = wordCards[currentLanguageLevel].map((item) => {
    return (
      <li key={ item.id } className="list-group-item">
        <Btn src={item.audio}/>
        {item.word}
        {item.transcription}
        {item.wordTranslate}
        {item.textExample}
        <img src={`https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/${item.image}`} width="80px" alt={`${item.word}`}></img>
      </li>
    )
  })
  // setPosts(listItem);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  
  return (
    <ul className="list-group mb-4">
      {/* <posts posts={currentPost}/>  */}
      { listItem }
    </ul>
    // <Posts posts={posts} />
    // null
  );
}

export default Vocabulary;