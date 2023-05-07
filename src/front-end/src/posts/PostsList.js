import React from 'react';
import StyledPosts from './styles';

const PostsList = ({ posts }) => {
  return (
    <StyledPosts>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.titulo}</h2>
          {post.images.map(image => (
            <img key={image} src={image} alt="post image" width={100} />
          ))}
          <p>{post.content}</p>
        </div>
      ))}
    </StyledPosts>
  );
};

export default PostsList;
