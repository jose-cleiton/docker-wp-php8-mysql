import StyledPosts from './styles';
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
    <StyledPosts>
      <PostsList posts={posts} />
    </StyledPosts>
  );
};

export default Posts;
