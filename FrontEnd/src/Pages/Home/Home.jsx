import React from 'react'
import style from "./style.module.css"
import { FaPlay } from "react-icons/fa";
import axios from "axios"
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { favoriteContext } from '../../Context/FavoritesContext.jsx';
import { FaHeart } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function Home(product) {
  let {favorite,setFavorite}=useContext(favoriteContext)
  let [searchQuery, setSearchQuery] = useState('')
  let [products,setProducts]=useState([])
  function getData(){
    axios.get("http://localhost:3000/musics")
    .then((res)=>{
      setProducts(res.data)
    })
  }
  useEffect(()=>{
     getData()
  },[])
  function handleSearch(event) {
      setSearchQuery(event.target.value)
    }
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    function handleAddFavorite(product){
      let findFavorite= favorite.find(item=>item._id==product._id)
  
      if(findFavorite){
         alert("Bu mehsul wishlistde movcuddur")
      }else{
         setFavorite([...favorite,product])
         
      }
   }



  return (
    <div className={style.home}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={style.hero}>
        <div className={style.herotext}>
          <h1>Episode 09: How To Create <br />
            Web Page Using Bootstrap 4</h1>
            <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
            <button>Read The Transcript</button>
        </div>
      </div>
      <div className={style.podcast}>
        <h1>Recent Podcasts</h1>
        
      <div className={style.podcarts}>
      <form action="">
          <input style={{marginBottom:"10%"}} value={searchQuery}  onChange={handleSearch} className={style.search} type="text" placeholder='Search'/>
        </form>
      { filteredProducts.map(product=>(
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
             <span onClick={()=>handleAddFavorite(product)}><FaHeart/></span>
        </div>
    </div>
      </div>
      </div>
))}
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
