import React from 'react';
import { FunctionComponent } from 'react';
import styles from "./PostCard.module.scss"
import ProfileAvatar from '../../profile-avatar/ProfileAvatar';

interface PostCardProps {
  description: string
}

const PostCard: FunctionComponent<PostCardProps> = ({ description }) => {
  return (
    <div className={`${styles["post-card"]}`}>
      <div className={`${styles["content-container"]}`}>


        <ProfileAvatar imageID={null} />
        <div className={`${styles["description-container"]}`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;