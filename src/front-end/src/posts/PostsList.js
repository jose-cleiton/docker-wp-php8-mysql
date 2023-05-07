import React from 'react';
import StyledPosts from './styles';

const PostsList = ({ posts }) => {
  return (
    <div className='post'>
     
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.images[0]} alt={post.titulo} width={160} />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat"></span>
              <span className="postCat"></span>              
            </div>
            <span className="postTitle">{post.titulo}</span>
            <hr />
            <span className="postDate">{new Date(post.data_publicacao).toLocaleDateString()}</span>
            <p>{post.content}</p>

          
          </div>
         
          
        </div>
      ))}
    </div>
  );
};

export default PostsList;
