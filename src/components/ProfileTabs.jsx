import React from "react";
import "../styles/profile.css";

const ProfileTabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["Posts", "Reels", "Tagged"];

  return (
    <div className="profile-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={selectedTab === tab ? "active" : ""}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
