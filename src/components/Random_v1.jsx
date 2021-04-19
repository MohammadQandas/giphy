import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const Random = () => {
  const [gif, setGif] = useState("");
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageUrl = data.data.images.downsized_large.url;
    setGif(imageUrl);
  }
  useEffect(() => {
    fetchGif();
  }, []);
const handleClick=()=>{
  fetchGif()
}
  return(
   <div className="container"> 
<h1>Random Giphy</h1>
<img src={gif}  width ="500" alt="giphy here" ></img>
<button onClick={handleClick }>Click for new </button>
  </div>
  )
};
export default Random;
