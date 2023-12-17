import React from 'react';
import '../styles/PostModal.css';

const PostModal = ({ post, onClose }) => {
  return (
    <div className="post-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           
        <h2>{post.title}</h2>
        <hr />
        <p>{post.text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PostModal;
