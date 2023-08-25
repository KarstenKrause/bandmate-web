import React from 'react';
import { FunctionComponent } from 'react';
import styles from "./PostCard.module.scss"

interface PostCardProps {
  description: string
}

const PostCard: FunctionComponent<PostCardProps> = ({ description }) => {
  return (
    <div className={`${styles["post-card"]}`}>
      <div className={`${styles["description-container"]}`}>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default PostCard;