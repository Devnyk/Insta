import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import PostModal from "./PostModal";
import "../styles/profile.css";

const PhotoGrid = ({ items }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <div className="photo-grid">
        {items.map((post) => (
          <div
            className="photo-card"
            key={post.id}
            onClick={() => setSelectedPost(post)}
          >
            <img src={post.image} alt={`Post ${post.id}`} />
            <div className="overlay">
              <div className="actions">
                <AiOutlineHeart size={22} />
                <FaRegComment size={22} />
                <FiSend size={22} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
};

export default PhotoGrid;
