import React from 'react'
import './HomePage.css';
import s from '../image/IMG.png'
import a from '../image/avatar.png'
// import Button from 'react-bootstrap/Button';
// import {BsSpotify} from 'react-icons/bs';
import Episode from './Episode';
import Hottest from './Hottest';
const HomePage = () => {
  return (
    <div style={{marginTop:'60px'}}>
      <div className="containerr">
        <img src={s} alt="Snow" className="snow" />

        <div className="centered">
          <div className="manrope">
            Listen to our Podcast. <br />
            Don’t miss out.
          </div>
          <div className="discuss">
            We talk about everything on this platfrom. We
            <br /> share experiences, ideas and discuss about
            <br /> design Lifestyle.
          </div>
          <div className="faces">
            <img src={a} alt="Snow" className="avatar" />
          </div>
          {/* <Button className="butt" variant='' >
            Listen on Spotify <BsSpotify />
          </Button> */}
        </div>
      </div>
{/* <Hottest/> */}
      <Episode/>
    </div>
  );
}

export default HomePage