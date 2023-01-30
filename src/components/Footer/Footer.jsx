import React from 'react'
import s from "../NavBar/images/TEXT.svg"
const Footer = () => {
  return (
    <div className="main">
      <div className="pt-5 pb-5">
        <hr />

        <div>
          <div className="container pt-4">
            <div className="div">
              <div className="container">
                <div className="row ">
                  <div className="col-12 col-lg-3 move">
                    <img
                      src={s}
                      alt="snow"
                      className="pt-4"
                      style={{marginLeft:'-30px'}}
                    />
                    
                  </div>
                  <div className="col-12 col-lg-3 move">
                    <div className="subs">
                      <div className="pt-4">Courses</div>
                      <div className="pt-4">Categories</div>
                      <div className="pt-4">Podcast</div>
                      <div className="pt-4">About us</div>
                      <div className="pt-4"> Contact</div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 move ">
                    <div className="subs">
                      <div className="pt-4">Security </div>
                      <div className="pt-4">Privacy</div>
                      <div className="pt-4">Terms</div>
                      <div className="pt-4">
                        Teach at UX Design
                        <br /> Master (coming soon)
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 pt-4 move">
                    <div>
                      <div className="scribe">
                        Want latest update on new courses and news from the
                        world of Design
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control mt-4"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                          style={{height:'47px'}}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{backgroundColor:"#FF4703", width:"120px"}}
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <hr />
        </div>

        <div style={{display: "flex", justifyContent:"center"}}>
          <div
            style={{fontFamily: 'Lato',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "160%",
      textAlign: "center"}}
          >
            {' '}
            Ⓒ 2022 Copyright | Email: enquires@uxdesignmaster.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer