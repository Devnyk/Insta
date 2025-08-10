// src/components/PostCard.jsx
import React, { useState } from "react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  // double-click to like (Instagram behaviour)
  const onDoubleClick = () => setLiked((s) => !s);

  return (
    <div className="photo-card" onDoubleClick={onDoubleClick}>
      <img
        src={post.image}
        alt={post.caption || `Post ${post.id}`}
        loading="lazy"
      />
      <div className="photo-overlay">
        <div className="overlay-item">❤ {liked ? post.likes + 1 : post.likes}</div>
        <div className="overlay-item">💬 {post.comments}</div>
      </div>
    </div>
  );
};

export default PostCard;
