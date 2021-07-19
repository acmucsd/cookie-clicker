import React from 'react';
import EditIcon from '../../static/img/Edit.svg';
import CheckIcon from '../../static/img/Check.svg';
import './index.less';

const ProfileCard = () => {
  const [unameEdit, setUnameEdit] = React.useState(false);
  const [uname, setUname] = React.useState('Username');
  const [nameEdit, setNameEdit] = React.useState(false);
  const [name, setName] = React.useState('Name');
  const [breadEdit, setBreadEdit] = React.useState(false);
  const [bread, setBread] = React.useState('Bread');
  const [infoEdit, setInfoEdit] = React.useState(false);
  const [info, setInfo] = React.useState('Info');
  const [profileEdit, setProfileEdit] = React.useState(false);
  const [profile, setProfile] = React.useState('Profile');
  const [socialsEdit, setSocialsEdit] = React.useState(false);
  const [socials, setSocials] = React.useState('Socials');
  return (
    <div className="profile-card-info">
      <div>
        <div className="username-editable">
          <span className="profile-card-text" style={{ display: unameEdit ? 'none' : 'inline' }}>
            {uname}
          </span>
          <input
            type="text"
            className="profile-card-input"
            style={{ display: unameEdit ? 'inline' : 'none' }}
            placeholder="Username"
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />
          <button
            className="edit-button"
            style={{ background: `url(${unameEdit ? CheckIcon : EditIcon})` }}
            onClick={() => {
              setUnameEdit(!unameEdit);
            }}
          />
        </div>
        <div className="name-editable">
          <span className="profile-card-text" style={{ display: nameEdit ? 'none' : 'inline' }}>
            {name}
          </span>
          <input
            type="text"
            className="profile-card-input"
            style={{ display: nameEdit ? 'inline' : 'none' }}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="edit-button"
            style={{ background: `url(${nameEdit ? CheckIcon : EditIcon})` }}
            onClick={() => {
              setNameEdit(!nameEdit);
            }}
          />
        </div>
        <div className="bread-editable">
          <span className="profile-card-text" style={{ display: breadEdit ? 'none' : 'inline' }}>
            {bread}
          </span>
          <input
            type="text"
            className="profile-card-input"
            style={{ display: breadEdit ? 'inline' : 'none' }}
            placeholder="Bread"
            onChange={(e) => {
              setBread(e.target.value);
            }}
          />
          <button
            className="edit-button"
            style={{ background: `url(${breadEdit ? CheckIcon : EditIcon})` }}
            onClick={() => {
              setBreadEdit(!breadEdit);
            }}
          />
        </div>
      </div>
      <div>
        <div className="info-editable">
          <span className="profile-card-text" style={{ display: infoEdit ? 'none' : 'inline' }}>
            {info}
          </span>
          <input
            type="text"
            className="profile-card-input"
            style={{ display: infoEdit ? 'inline' : 'none' }}
            placeholder="Info"
            onChange={(e) => {
              setInfo(e.target.value);
            }}
          />
          <button
            className="edit-button"
            style={{ background: `url(${infoEdit ? CheckIcon : EditIcon})` }}
            onClick={() => {
              setInfoEdit(!infoEdit);
            }}
          />
        </div>
        <div className="profile-editable">
          <span className="profile-card-text" style={{ display: profileEdit ? 'none' : 'inline' }}>
            {profile}
          </span>
          <input
            type="text"
            className="profile-card-input"
            style={{ display: profileEdit ? 'inline' : 'none' }}
            placeholder="Profile"
            onChange={(e) => {
              setProfile(e.target.value);
            }}
          />
          <button
            className="edit-button"
            style={{ background: `url(${profileEdit ? EditIcon : CheckIcon})` }}
            onClick={() => {
              setProfileEdit(!profileEdit);
            }}
          />
        </div>
        <div className="socials-editable">
          <span className="profile-card-text" style={{ display: socialsEdit ? 'none' : 'inline' }}>
            {socials}
          </span>
          <input
            type="text"
            className="profile-card-input"
            style={{ display: socialsEdit ? 'inline' : 'none' }}
            placeholder="Socials"
            onChange={(e) => {
              setSocials(e.target.value);
            }}
          />
          <button
            className="edit-button"
            style={{ background: `url(${socialsEdit ? EditIcon : CheckIcon})` }}
            onClick={() => {
              setSocialsEdit(!socialsEdit);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
