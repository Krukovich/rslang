import React, { useState, useEffect } from 'react';

import wordCards from './vocabulary-data';
import Posts from './Posts/Posts';
import Pagination from './Pagination/Pagination';


const Vocabulary = () => {
  const [posts, setPosts] = useState([]);
  const [currentLanguageLevel] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const getPosts = () => {
      setPosts(wordCards[currentLanguageLevel]);
    }

    getPosts();
  }, []);


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const asideToggle = () => {
    setIsClicked(!isClicked);
  }
  
  return (
    <React.Fragment>
      <div className='container pt-5'>
        <div className="row pt-5">
          <div className="col-12">
            <Posts posts={currentPost} />
          </div>
          <div className="col-12">
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Vocabulary;
