import React from 'react'
import './HomePage.css';
import Card from 'react-bootstrap/Card';
// import b from '../image/3.png';
import d from '../image/avatar.png';
import { Link } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch';
const PlayList = () => {
     const { loading, error, data } = useFetch(
       'http://localhost:1337/playlists/?_limit=2'
     );
     if (loading) return <p>loading</p>;
     if (error) return <p>error</p>;
  return (
    <div>
      <div className="container ">
        <div className="hot">Current PlayList </div>
        <div className="cardHolder">
          {data.map((props) => (
            <Card className="carditself" key={props.id}>
              <Link
                to={`/podcast/${props.id}`}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <div className="hmm">
                  <img
                    src={`http://localhost:1337${props.thumbnail.url}`}
                    className="imagetag"
                    alt="wow"
                  />
                  <Card.Body>
                    <div className="tit">
                      {props.authorName} - {props.playlistName}
                    </div>
                    <div className="dist">{props.description}</div>
                    <div className="mt-4">
                      <img src={d} alt="d" style={{ width: '25%' }} />
                      <span className="px-3 list">Listening Now</span>
                    </div>
                  </Card.Body>
                </div>
              </Link>
            </Card>
          ))}
        </div>
        <div className=" mt-5" style={{textAlign:'center'}}>
          {' '}
          check out playlist page for more{' '}
        </div>
      </div>
    </div>
  );
}

export default PlayList