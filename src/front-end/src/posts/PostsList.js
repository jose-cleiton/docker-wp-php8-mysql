import React from 'react';
import StyledPosts from './styles';

const PostsList = ({ posts }) => {
  return (
    <StyledPosts>
      <div className='posts'>
        {posts.map(post => (
          <div key={post.id}>
            {post.images.length > 0 && (
              <img src={post.images[0]} alt={post.titulo} className='postImg'/>
            )}
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat"></span>
                <span className="postCat"></span>              
              </div>
              <span className="postTitle">{post.titulo}</span>
              <hr />
              <span className="postDate">{new Date(post.data_publicacao).toLocaleDateString()}</span>
              <p className='postDesc'>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledPosts>
  );
};

export default PostsList;
