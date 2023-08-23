import React from 'react';
import { FunctionComponent } from 'react';
import styles from "./PostCard.module.scss"

interface PostCardProps {
  
}

const PostCard: FunctionComponent<PostCardProps> = () => {
  return (  
    <div className={styles["post-card"]}>
      
    </div>
  );
}

export default PostCard;