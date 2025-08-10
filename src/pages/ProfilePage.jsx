import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Highlights from "../components/Highlights";
import ProfileTabs from "../components/ProfileTabs";
import PhotoGrid from "../components/PhotoGrid";
import postsData from "../data/posts";
import highlightsData from "../data/highlightsData";
import "../styles/profile.css";
import dp from "../assets/avatar.jpg";

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("Posts");

  const profile = {
    username: "sheryians_coding_school",
    name: "The Sheryians Coding School",
    avatar: dp,
    bio: "Join Us👇",
    posts: postsData.length,
    followers: `1.2M`,
    following: 21,
    isFollowing: false
  };

  // Filter posts based on selected tab
  const filteredPosts = postsData.filter(
    (p) => selectedTab === "Posts" ? p.type === "post" : p.type.toLowerCase() === selectedTab.toLowerCase()
  );

  return (
    <div className="profile-page">
      <ProfileHeader profile={profile} />
      <Highlights highlights={highlightsData} />
      <ProfileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <PhotoGrid items={filteredPosts} />
    </div>
  );
};

export default ProfilePage;
