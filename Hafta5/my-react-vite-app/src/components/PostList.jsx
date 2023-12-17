import React, { useState } from 'react';
import PostModal from './PostModal';
import '../styles/PostList.css';

const PostList = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item" onClick={() => openModal(post)}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p><strong>Subject:</strong> {post.subject}</p>
        </div>
      ))}
      {selectedPost && <PostModal post={selectedPost} onClose={closeModal} />}
    </div>
  );
};

export default PostList;
