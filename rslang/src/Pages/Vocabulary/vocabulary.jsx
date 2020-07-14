import React, { useState, useEffect } from 'react';

import WordsToLearn from './WordsToLearn/WordsToLearn.jsx';
import Pagination from './Pagination/Pagination.jsx';
import { connect } from 'react-redux';
import {setDeleteWords, setDayLearningWords} from '../../Store/PlayZonePage/actions';
import {checkDeleteWords} from '../../service'

const mapStateToProps = (store) => {
  return { 
    learningWords: store.playZone.dayLearningWords,
    deleteWords: store.playZone.deleteWords,
  }
}

const mapActionToProps = {
  setDeleteWords,
  setDayLearningWords,
}


const Vocabulary = (props) => {
  const _THIS = props;
  const [posts, setPosts] = useState(props.learningWords);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  useEffect(() => {
    const getPosts = () => {
      setPosts(props.learningWords);
    }

    getPosts();
  }, []);


  // remove words for learn into deleted words
  const remove = (index) => {
    const newArr = [
      ...posts.slice(0, index),
      ...posts.slice(index + 1)
    ];
    if (!checkDeleteWords(props.deleteWords, posts[index].word)) {
      _THIS.setDeleteWords(posts[index])
      _THIS.setDayLearningWords(newArr)
    }
    setPosts(newArr);
  }


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <div className='container-fluid'>
        <WordsToLearn posts={currentPost} remove={remove} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapActionToProps)(Vocabulary);
