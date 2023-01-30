import { useState, useRef } from 'react';
import gsap from 'gsap';
import './HomePage.css';
import s from '../image/mas.png';
import a from '../image/1.png';
import b from '../image/3.png';
import c from '../image/5.png';
import { BsPlayFill } from 'react-icons/bs';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
const Episode = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.2 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.2 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="current">Current Episode</div>
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
        <div className="current mt-4">Playlist </div>

        <div className="App">
          {scrollX !== 0 && (
            
              <MdArrowBackIosNew
                className="next"
                onClick={() => slide(-300)}
                onMouseEnter={(e) => anim(e)}
                onMouseLeave={(e) => anim2(e)}
              />
         
          )}
          <div className="ul" ref={scrl} onScroll={scrollCheck}>
            <img src={a} alt="mas" />
            <img src={b} alt="mas" />
            <img src={c} alt="mas" />
            <img src={c} alt="mas" />
            <img src={c} alt="mas" />
            <img src={c} alt="mas" />
            <img src={c} alt="mas" />
            <img src={c} alt="mas" />
            <img src={c} alt="mas" />
          </div>
          {!scrolEnd && (
        
              <MdArrowForwardIos
                className="next2"
                onClick={() => slide(+300)}
                onMouseEnter={(e) => anim(e)}
                onMouseLeave={(e) => anim2(e)}
                style={{fontSize:'3px'}}
              />
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Episode;
