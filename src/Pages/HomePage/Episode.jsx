import React from 'react';
import './HomePage.css';
// import { BsPlayFill } from 'react-icons/bs';
// import s from '../image/mas.png';
import PlayList from './PlayList';
import Slider from './Slider';
import useFetch from '../../components/Hooks/useFetch';
import Hottest from './Hottest';
import Single from '../Single/Single'
const Episode = () => {


   const { loading, error, data } = useFetch('http://localhost:1337/playlists');
   if (loading) return <p>loading</p>;
   if (error) return <p>error</p>;
  return (
    <div className="main">
      <div className="container">
<Hottest/>
        <div className="current mt-4 mb-4">Top Creators </div>

        <Slider data={data} />
      </div>
      <br/>
      <Single/>
      <br/>
      <br/>
      <PlayList data={data} />
    </div>
  );
};

export default Episode;
