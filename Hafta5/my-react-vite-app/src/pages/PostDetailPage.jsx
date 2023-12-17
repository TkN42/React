import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostModal from '../components/PostModal';

const PostDetailPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id, 10));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <PostModal post={post} onClose={closeModal} />}
    </div>
  );
};

export default PostDetailPage;
