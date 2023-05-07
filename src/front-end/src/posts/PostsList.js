import React from 'react';
import StyledPosts from './styles';

const PostsList = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.titulo}</h2>
          <img src={post.images[0]} alt={post.titulo} width={160} />
          <p>{post.content}</p>
          <p>Data de publicação: {new Date(post.data_publicacao).toLocaleDateString()}</p> {/* Adiciona a data formatada */}
        </div>
      ))}
    </div>
  );
};

export default PostsList;
