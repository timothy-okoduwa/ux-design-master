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

             const { loading, error, estate } = useFetch(
               'http://localhost:1337/api/playlists?populate=*'
             );
             if (loading) return <p>loading</p>;
             if (error) return <p>error</p>;
  return (
    <div className="main">
      <div className="container">
        <Hottest />
        <div className="current mt-4 mb-4">Top Creators </div>

        <Slider estate={estate} />
      </div>
      <br />
      <Single />
      <br />
      <br />
      <PlayList estate={estate} />
    </div>
  );
};

export default Episode;
