import { useState, useEffect } from 'react';
import fetchPosts from './fetchPosts';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  return {
    posts,
    isLoading,
    hasError,
  };
};

export default usePosts;
