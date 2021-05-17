import React from 'react';
import './index.less';

const ProfileCard = () => {
  return (
    <div className="profile-card-info">
      <div>
        <div>
          <span className="username-text profile-card-text">Username</span>
          <input type="text" className="profile-card-input" />
        </div>
        <div>
          <span className="name-text profile-card-text">Name</span>
          <input type="text" className="profile-card-input" />
        </div>
        <div>
          <span className="bread-text profile-card-text">Bread</span>
          <input type="text" className="profile-card-input" />
        </div>
      </div>
      <div>
        <div>
          <span className="info-text profile-card-text">Info</span>
          <input type="text" className="profile-card-input" />
        </div>
        <div>
          <span className="profile-text profile-card-text">Profile</span>
          <input type="text" className="profile-card-input" />
        </div>
        <div>
          <span className="socials-text profile-card-text">Socials</span>
          <input type="text" className="profile-card-input" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
