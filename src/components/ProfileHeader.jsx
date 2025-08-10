import React from "react";
import "../styles/profile.css";

const ProfileHeader = ({ profile }) => {
  return (
    <div className="profile-header">
      <img
        src={profile.avatar}
        alt={profile.username}
        className="profile-avatar"
      />
      <div className="profile-info">
        <div className="profile-top">
          <h2>{profile.username}</h2>
          <button className="follow-btn">
            {profile.isFollowing ? "Following" : "Follow"}
          </button>
        </div>
        <div className="profile-stats">
          <span>
            <b>{profile.posts}</b> posts
          </span>
          <span>
            <b>{profile.followers}</b> followers
          </span>
          <span>
            <b>{profile.following}</b> following
          </span>
        </div>
        <div className="profile-bio">
          <b className="text-lg">{profile.name}</b>
          <p className="bio font-light text-sm">
            {profile.bio} <br />
            <a
              href="https://www.sheryians.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link text-blue-500 font-semibold text-base"
            >
              www.sheryians.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
