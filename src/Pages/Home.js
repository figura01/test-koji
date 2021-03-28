import React,{ useState, useEffect } from 'react';
import Request from '../service';
import ListArticles from '../components/ListArticles'


const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  const loadData = async () => {
    try {
      const results = await Request.getAll("/posts");
      if(results) {
        setArticles(results);
        setIsLoading(false);
      }
    }catch(err){
      setIsError(true);
      setError({
        msg: 'Sorry, something wrong, please try it again later',
        data: err.data
      });
      setIsLoading(false);
    }
    

  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="page home">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        {isError ? (
          <p>{error.msg}</p>
        ) : (
          <ListArticles articles={articles} />
        )}
        </>
      )}
    </div>
  )
}

export default Home
