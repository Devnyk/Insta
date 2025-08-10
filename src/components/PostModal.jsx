// src/components/PostModal.js
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "../styles/postModal.css";

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Left: Post image */}
        <div className="modal-left">
          <img src={post.image} alt="Post" />
        </div>

        {/* Right: Post details */}
        <div className="modal-right">
          <div className="post-info">
            <p className="caption">{post.caption}</p>
            <div className="stats">
              <span>❤️ {post.likes} likes</span>
              <span>💬 {post.comments} comments</span>
            </div>
            <div className="icons">
              <AiOutlineHeart size={24} />
              <FaRegComment size={24} />
              <FiSend size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
