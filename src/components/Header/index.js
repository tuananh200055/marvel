import react from "react";
import {useEffect, useState} from "react";
import MarvelLogo from "../../img/Marvel_Logo.svg.png";
import clsx from "clsx";
import styles from "./Header.module.scss";
import CharacterBox from "../CharacterBox";
import axios from "axios"


function Header() {
  const api = "https://gateway.marvel.com:443/v1/";

  const key = "43b6c270cab0ae1477e1f4d224fb9df4";

  const privateKey = "4d758dfd27d8c1bc1eb7da84b3dce5182145eccf";
  const hash = "e746c8e24f274f2a80c6d05d684f68a8";

  const [trendingCharacter, setTrendingCharacter] = useState([]);

  const [showCharacter, setShowCharacter] = useState(false);

  const handleMouseOver =(e)=>{
    const text = e.target.text;
    if(text == "characters"){
      setShowCharacter(true)
    }
    // else{
    //   setShowCharacter(false);
    // }
  }

  const clearActive=()=>{
    setShowCharacter(false);
  }
  useEffect(() => {
    getTrendingCharacter();
  },[])

  const getTrendingCharacter = async ()=>{
    try {
      const response = await axios.get(api + "/public/characters", {
        params: {
          orderBy: "-modified",
          limit: 6,
          offset:5,
          apikey: key,
          ts: 1,
          hash: hash,
        },
      });
      if (response.status === 200) {
	setTrendingCharacter(response.data.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.headerWrap)}>
        <div className="container  middle">
        <a href="#" className={clsx(styles.logo, "middle")}>
          <img src={MarvelLogo} alt="" />
        </a>
        <nav className={clsx(styles.nav)}>
          <ul>
            <li>
              <a href="">videos</a>
             
            </li>
            <li onMouseOver={handleMouseOver} onMouseOut={clearActive}>
              {" "}
              <a href="">characters</a>
              <div className={clsx(styles.box , {
                [styles.active]: showCharacter
              })} onMouseOver={()=>setShowCharacter(true)} onMouseOut={clearActive}>
                   <div className={clsx(styles.boxWrap)}>
                  <div className={clsx(styles.sort)}>
                   
                    <a href="#">all characters</a>
                    <a href="#">teams and groups</a>
                    <a href="#">Explore All</a>
                  </div>
                  <h2 className={clsx(styles.boxTitle)}>trending in the universe</h2>
                  <CharacterBox characters ={trendingCharacter}/>
                  </div>
              </div>
            </li>
            <li>
              <a href="">comics</a>
            </li>
            <li>
              <a href="">movies</a>
            </li>
            <li>
              <a href="">tv shows</a>
            </li>
            <li>
              <a href="">games</a>
            </li>
            <li>
              <a href="">news</a>
            </li>
            <li>
              <a href="">more</a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
