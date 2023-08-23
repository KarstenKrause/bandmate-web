import React from 'react'
import "./home.scss"
import PostCard from '../../components/cards/post-cards/PostCard';

export interface IHomePageProps {
    
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
      <div className="home-container">
        <h1>Beiträge</h1>
        <div className='posts-container'>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

      </div>
    );
}

export default HomePage;
