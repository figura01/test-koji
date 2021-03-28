import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Request from '../service';

import Article from '../components/Article';

const SingleArticle = props => {
  const articleId = props.match.params.id;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  const loadData = async () => {
    try {
      const results = await Request.getOne(`/posts/${articleId}`);
      if(results) {
        console.log(results);
        setArticle(results);
        setIsError(false);
        setIsLoading(false);
      }
    }catch(err){
      console.log(err);
      setError({
        msg: 'Sorry, something wrong, please try it again later',
        data: err.data
      });
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(()=> {
    loadData();
  }, []);

  console.log(articleId);
  
  return (
    <div className="page single-article">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          
          {isError ? (
            <p>{error.msg}</p>
          ) : (
            <Article {...article} />
          )}
          <Link to="/" className="back-link">
            <i className="fas fa-chevron-right"></i>
            <span>Back</span>
          </Link>
        </>
      )}
    </div>
  )
}

export default SingleArticle;
