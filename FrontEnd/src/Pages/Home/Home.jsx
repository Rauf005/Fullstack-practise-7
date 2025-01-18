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
      
    </div>
  )
}

export default Home
