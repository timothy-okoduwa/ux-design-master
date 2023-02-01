import React from 'react'
import useFetch from '../../components/Hooks/useFetch';
import './Playlist.css';
import Card from 'react-bootstrap/Card';
// import b from '../image/3.png';
import d from '../image/avatar.png';
import { Link } from 'react-router-dom';
const Playlist = () => {
     const [search, setSearch] = React.useState('');
         const { loading, error, data } = useFetch(
           'http://localhost:1337/playlists'
         );
         if (loading) return <p>loading</p>;
         if (error) return <p>error</p>;
  return (
    <div className="pt-5 plist">
      <div className="care">Carefully selected just for you </div>
      <div className="inpoutt">
        <input
          type="text"
          placeholder="search by creators name"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div className="container">
        <div className="downward">
          <div className="cardHolder">
            {data
              .filter((props) => {
                if (search === '') {
                  return props;
                } else if (
                  props.authorName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return props;
                } 
              })
              .map((props) => (
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
                          <img src={d} alt=" " style={{ width: '25%' }} />
                          <span className="px-3 list">Listening Now</span>
                        </div>
                      </Card.Body>
                    </div>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist