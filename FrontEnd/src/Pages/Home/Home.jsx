import React from 'react'
import style from "./style.module.css"

function Home() {
  return (
    <div className={style.home}>
      <div className={style.hero}>
        <div className={style.herotext}>
          <h1>Episode 09: How To Create <br />
            Web Page Using Bootstrap 4</h1>
            <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
            <button>Read The Transcript</button>
        </div>
      </div>
      <div className={style.behind}>
        <h1>Behind The Mic</h1>
        <div className={style.behcards}>
        <div className={style.behcard}>
          <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg" alt="" />
          <div className={style.behtext}>
            <h3>Brooke Cagle</h3>
            <span>Creative Director</span>
            <p>Lorem ipsum dolor sit amet consectetur <br />
               adipisicing elit ullam reprehenderit nemo.</p>
            
          </div>
        </div>
        <div className={style.behcard}>
          <img src="https://preview.colorlib.com/theme/podca/images/person_2.jpg" alt="" />
          <div className={style.behtext}>
            <h3>Brooke Cagle</h3>
            <span>Creative Director</span>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit ullam reprehenderit nemo.</p>
            
          </div>
        </div>
        <div className={style.behcard}>
          <img src="https://preview.colorlib.com/theme/podca/images/person_3.jpg" alt="" />
          <div className={style.behtext}>
            <h3>Brooke Cagle</h3>
            <span>Creative Director</span>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit ullam reprehenderit nemo.</p>
            
          </div>
        </div>
        <div className={style.behcard}>
          <img src="https://preview.colorlib.com/theme/podca/images/person_4.jpg" alt="" />
          <div className={style.behtext}>
            <h3>Brooke Cagle</h3>
            <span>Creative Director</span>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit ullam reprehenderit nemo.</p>
            
          </div>
        </div>
        <div className={style.behcard}>
          <img src="https://preview.colorlib.com/theme/podca/images/person_5.jpg" alt="" />
          <div className={style.behtext}>
            <h3>Brooke Cagle</h3>
            <span>Creative Director</span>
            <p>Lorem ipsum dolor sit amet consectetur  <br />adipisicing elit ullam reprehenderit nemo.</p>
            
          </div>
        </div>
        <div className={style.behcard}>
          <img src="https://preview.colorlib.com/theme/podca/images/person_6.jpg" alt="" />
          <div className={style.behtext}>
            <h3>Brooke Cagle</h3>
            <span>Creative Director</span>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit ullam reprehenderit nemo.</p>
            
          </div>
        </div>
        </div>
      </div>
      <div className={style.featured}>
        <h1>Featured Guests</h1>
      <div className={style.featcards}>
      <div className={style.featcard}>
        <img src="https://preview.colorlib.com/theme/podca/images/person_4.jpg" alt="" />
        <div>
        <h2>Steven Ericson</h2>
        <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Architecto  officiis id doloremque ipsum assumenda vel?</p>
        </div>
        
        </div>
        <div className={style.featcard}>
        <img src="https://preview.colorlib.com/theme/podca/images/person_5.jpg" alt="" />
        <div>
        <h2>Steven Ericson</h2>
        <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Architecto  officiis id doloremque ipsum assumenda vel?</p>
        </div>
        
        </div>
        <div className={style.featcard}>
        <img src="https://preview.colorlib.com/theme/podca/images/person_6.jpg" alt="" />
        <div>
        <h2>Steven Ericson</h2>
        <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Architecto  officiis id doloremque ipsum assumenda vel?</p>
        </div>
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
