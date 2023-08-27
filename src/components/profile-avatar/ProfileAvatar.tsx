import React from 'react';
import { FunctionComponent } from 'react';
import styles from './ProfileAvatar.module.scss'

interface ProfileAvatarProps {
  imageID: string | null


}

const ProfileAvatar: FunctionComponent<ProfileAvatarProps> = () => {
  return (
    <img
      className={`${styles['profile-avatar-img']}`}
      src={'./avatar_placeholder.png'} alt='logo'
    />
  );
}

export default ProfileAvatar;