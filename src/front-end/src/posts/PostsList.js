import React from 'react';

const PostsList = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.titulo}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
