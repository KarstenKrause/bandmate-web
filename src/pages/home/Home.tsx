import React from 'react'
import "./home.scss"
import PostCard from '../../components/cards/post-cards/PostCard';


const testPostCardsData = [
  {
    description: "kljsdlkjds"
  },
  {
    description: "kljsdlkjds"
  },
  {
    description: "kljsdlkjds"
  },
  {
    description: "kljsdlkjds"
  },
]
export interface IHomePageProps {

}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="home-container">
      <h1>Neu auf Bandmate</h1>
      <h1>Beiträge</h1>
      <div className='posts-container'>
        
        {
          testPostCardsData.map(post => (
            <PostCard description={post.description}/>
          ))
        }
      </div>

    </div>
  );
}

export default HomePage;
