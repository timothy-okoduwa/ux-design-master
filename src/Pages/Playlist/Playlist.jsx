import React from 'react'
import useFetch from '../../components/Hooks/useFetch';
import './Playlist.css';
import Card from 'react-bootstrap/Card';
// import b from '../image/3.png';
// import ImageMap from '../HomePage/ImageMap';
import d from '../image/avatar.png';
import { Link } from 'react-router-dom';
const Playlist = () => {
     const [search, setSearch] = React.useState('');
         const { loading, error, estate } = useFetch(
           'https://strapi-production-3f07.up.railway.app/api/playlists?populate=*'
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
            {estate
              ?.filter((props) => {
                if (search === '') {
                  return props;
                } else if (
                  props.attributes.authorName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return props;
                }
              })
              ?.map((props) => (
                <Card className="carditself" key={props.id}>
                  <Link
                    to={`/podcast/${props.id}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <div className="hmm">
                      <img
                        className="imagetag"
                        src={props?.attributes?.thumbs}
                        // src={`https://res.cloudinary.com/t8m0thy/image/upload/v1675701022/1_06556325b0.png`}
                      />{' '}
                      <div>{props?.attributes?.thumb?.data?.attributes?.url}</div>
                      <Card.Body>
                        <div className="tit">
                          {props.attributes.authorName} -{' '}
                          {props.attributes.playlistName}
                        </div>
                        <div className="dist">
                          {props.attributes.description}
                        </div>
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