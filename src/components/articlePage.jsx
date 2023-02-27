import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams(); // Unpacking and retrieve id
  return (
    <div>
      <p>To Do: Fecth article data for id: {id} </p>
    </div>
  );
};

export default ArticlePage;
