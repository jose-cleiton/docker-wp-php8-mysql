
import PostsList from './PostsList';
import usePosts from './usePosts';

const Posts = () => {
  const { posts, isLoading, hasError } = usePosts();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (hasError) {
    return <p>Ocorreu um erro ao carregar os posts...</p>;
  }

  return (
   
      <PostsList posts={posts} />
    
  );
};

export default Posts;
