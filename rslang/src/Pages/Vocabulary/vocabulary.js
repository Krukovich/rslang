import React, { useState, useEffect } from 'react';
import wordCards from './vocabulary-data';
import Posts from './Posts/Posts';
import Pagination from './Pagination/Pagination';


const Vocabulary = () => {
  const [posts, setPosts] = useState([]);
  const [currentLanguageLevel] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

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
  
  return (
    <div className='container mt-5'>
      <Posts posts={currentPost} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default Vocabulary;
