import React from 'react'
import "./home.scss"

export interface IHomePageProps {
    
}
 
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
      <div className="home-container">
        <h1>Beiträge</h1>
      </div>
    );
}
 
export default HomePage;
