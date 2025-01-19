import React from 'react'
import {Helmet} from "react-helmet"
import { useContext } from 'react'
import style from "./style.module.css"
import { FaPlay } from "react-icons/fa";
import { favoriteContext } from '../../Context/FavoritesContext'
import { FaHeartBroken } from "react-icons/fa";





function Favorites() {
  let {favorite,setFavorite}=useContext(favoriteContext)

  function handleDeleteFavorite(id){
      let filteredFavorite=favorite.filter(product=>product._id!==id)
      setFavorite(filteredFavorite)
  }
  return (
    <div style={{minHeight:"500px"}}>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

<div className={style.podcarts}>
     
      { favorite.map(product=>(
      <div className={style.podcart} key={product._id}>
      <div className={style.podimage}>
        <img src={product.image} alt="" />
        </div>
        <div className={style.podtext}>
        <h2>{product.name}</h2>
        <span>{product.time}</span>
        <p>{product.description}</p>
        <div class={style.musicplayer}>
        <audio id={style.audioplayer} src="your-music-file.mp3"></audio> 
        
        <div class={style.controls}>
            <b id={style.playpause}><FaPlay/></b>
            <span id={style.currenttime}>0:00</span>
            <input type="range" id={style.seekbar} value="0" min="0" step="1" />
             <span id={style.duration}>0:00</span>
             <span onClick={()=>handleDeleteFavorite(product._id)}><FaHeartBroken/></span>
        </div>
    </div>
      </div>
      </div>
))}
      </div>
    </div>
  )
}

export default Favorites