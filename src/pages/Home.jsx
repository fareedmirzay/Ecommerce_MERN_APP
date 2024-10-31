import React from 'react'
import Showcase from '../components/Showcase';
import LatestCollection from '../components/LatestCollection';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';

const Home = () => {
  return (
    <div>
        <Showcase />
        <LatestCollection />
        <NewsLetterBox />
    </div>
  )
}

export default Home;
