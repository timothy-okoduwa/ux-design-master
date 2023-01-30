import React from 'react';
import './HomePage.css';
import { BsPlayFill } from 'react-icons/bs';
import s from '../image/mas.png';
import PlayList from './PlayList';
import Slider from './Slider';
import useFetch from '../../components/Hooks/useFetch';
const Episode = () => {


   const { loading, error, data } = useFetch('http://localhost:1337/playlists');
   if (loading) return <p>loading</p>;
   if (error) return <p>error</p>;
  return (
    <div className="main">
      <div className="container">
        <div className="current">hottest Episode</div>
        <div className="row mt-5">
          <div className="col col-12 col-lg-6 ">
            <div className="block">
              <img src={s} alt="mas" className="block" />
            </div>
          </div>
          <div className="col col-12 col-lg-6 d-flex justify-content-center mt-5">
            <div className="soft">
              <div className="episode">
                <span>Episode 20</span>
                <span className="span">.</span>
                <span className="span">Soft Skills </span>
              </div>
              <div className="talks">
                From writing and design, to maximizing engagement with <br />{' '}
                carousels and Reels, Learn Chris Do's exact process for make
                <br />
                attention-grabbing Instagram content meant to grow your
                <br /> industry authority.
              </div>
              <div className="play">
                <BsPlayFill /> 23k
              </div>
            </div>
          </div>
        </div>
        <div className="current mt-4 mb-4">Playlist </div>

        <Slider data={data} />
      </div>
      <br/>
      <br/>
      <br/>
      <PlayList data={data} />
    </div>
  );
};

export default Episode;
