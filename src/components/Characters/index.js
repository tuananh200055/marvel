import React from "react";
import Header from "../Header";
import PageHead from "../PageHead";
import CharacterBox from "../CharacterBox";
import styles from "./Characters.module.scss";
import clsx from "clsx";
import NewsBox from "../NewsBox";
import searchIcon from "../../img/search.png";
import Footer from "../Footer";
import Promo from "../Promo";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Autosuggest from "react-autosuggest";
import ReactPaginate from "react-paginate";
function Characters() {
  const api = "http://gateway.marvel.com/v1/";
  let AutosuggestHighlightMatch = require("autosuggest-highlight/match");
  let AutosuggestHighlightParse = require("autosuggest-highlight/parse");
  const allCharactersRef = useRef(null);
  const key = "43b6c270cab0ae1477e1f4d224fb9df4";

  const privateKey = "4d758dfd27d8c1bc1eb7da84b3dce5182145eccf";
  const hash = "e746c8e24f274f2a80c6d05d684f68a8";

  const [latestCharacters, setLatestCharacters] = useState([]);
  const [latestCharacters2, setLatestCharacters2] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  // const [page,setpage] = useState(1);
  const [listSearch, setListSearch] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getLatestCharacter();
    getAllCharacters();
  }, []);

  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.trim().length > 1) {
      getListSearch();
    }
  }, [search]);

  const findCharacterByNameContains = async(name) =>{
    try {
      const response = await axios.get(api + "/public/characters", {
        params: {
          nameStartsWith: name,
          limit: 36,
          offset:itemOffset,
          apikey: key,
          ts: 1,
          hash: hash,
        },
      });
      if (response.status === 200) {
        setAllCharacters(response.data.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  }


  const getListSearch = async () => {
    try {
      const response = await axios.get(api + "/public/characters", {
        params: {
          nameStartsWith: search,
          limit: 5,
          apikey: key,
          ts: 1,
          hash: hash,
        },
      });
      if (response.status === 200) {
        setListSearch(response.data.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [suggestions, setSuggestions] = useState([]);

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    return listSearch.filter((item) => regex.test(item.name));
  }

  const findCharacterByName = async(name) =>{
    try {
      const response = await axios.get(api + "/public/characters", {
        params: {
          name:name,
          limit: 36,
          offset: itemOffset,
          orderBy: "name",
          apikey: key,
          ts: 1,
          hash: hash,
        },
      });
      if (response.status === 200) {
        setAllCharacters(response.data.data.results);
        console.log(response.data.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  }

  

  const getSuggestionValue = (suggestion) => {findCharacterByName(suggestion.name); return suggestion.name};

  function renderSuggestion(suggestion, { query }) {
    const matches = AutosuggestHighlightMatch(suggestion.name, query);
    const parts = AutosuggestHighlightParse(suggestion.name, matches);

    return (
      <span>
        {parts.map((part, index) => {
          const className = part.highlight
            ? "react-autosuggest__suggestion-match"
            : null;

          return (
            <span className={className} key={index}
          
            >
              {part.text}
            </span>
          );
        })}
      </span>
    );
  }

  const onChange = (event, { newValue, method }) => {
    setSearch(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
 
    function onKeyDown(event) {
      
    if (event.key === 'Enter') {
      if(search.trim() != "")
      findCharacterByNameContains(search);
      else{
        getAllCharacters()
      }
    }
  }

  const inputProps = {
    placeholder: "SEARCH",
    value: search,
    onChange: onChange,
    onKeyDown:onKeyDown
  };

  // const renderInputComponent = inputProps => (
  //   <div>
  //     <input {...inputProps} />
  //   </div>
  // );
  function shouldRenderSuggestions(value, reason) {
    return value.trim().length > 2;
  }

  const getLatestCharacter = async () => {
    try {
      const response = await axios.get(api + "/public/characters", {
        params: {
          orderBy: "-modified",
          limit: 12,
          apikey: key,
          ts: 1,
          hash: hash,
        },
      });
      if (response.status === 200) {
        console.log(response.data.data.results);
        const c1 = response.data.data.results;
        setLatestCharacters(c1.splice(6, 12));
        setLatestCharacters2(response.data.data.results.splice(0, 6));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(api + "/public/characters", {
        params: {
          limit: 36,
          offset: itemOffset,
          orderBy: "name",
          apikey: key,
          ts: 1,
          hash: hash,
        },
      });
      if (response.status === 200) {
        setAllCharacters(response.data.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // Pagination

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 36;

  const itemSize = 1559;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(itemSize / itemsPerPage));
    getAllCharacters();
  }, [itemOffset, itemsPerPage, pageNumber]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemSize;
    // const page = newOffset/itemsPerPage+1;
    // setPageNumber(page);
    setItemOffset(newOffset);
    allCharactersRef.current.scrollIntoView();
    console.log(allCharacters);
  };
  const infoPage = {
    h1: "MARVEL CHARACTERS",
    p :"Get hooked on a hearty helping heroes and villans from the humble House of Ideas",
    background: "url(https://terrigen-cdn-dev.marvel.com/content/prod/1x/characters_art_mas_dsk_01.jpg)",
    headCut: "black"
  }
  return (
    <>
      <Header />
      <div className={clsx(styles.promoWrap)}>
			<a  href='#'>
				<span>reward your marvel fandom with </span>
				<img src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/insiderlogo_h72_navpipe-thin-variant-promo.png" alt="" />
			</a>
			</div>
      <PageHead infoPage ={infoPage}/>

      <section className={clsx(styles.featured)}>
        <div className="container">
          <h2 className={clsx(styles.title)}>FEATURED CHARACTERS</h2>
        </div>
        <CharacterBox characters={latestCharacters} />
      </section>

      <section className={clsx(styles.spotlight)}>
        <div className="container">
          <h2 className={clsx(styles.title)}>CHARACTER SPOTLIGHT</h2>
        </div>
        <NewsBox />
      </section>

      <CharacterBox characters={latestCharacters2} />

      <section ref={allCharactersRef} className={clsx(styles.listCharacter)}>
        <div className="container">
          <h2 className={clsx(styles.title)}>MARVEL CHARACTERS LIST</h2>
          <div className={clsx(styles.search)}>
            <img src={searchIcon} alt="" />
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              shouldRenderSuggestions={shouldRenderSuggestions}
              inputProps={inputProps}
            />
            {/* <input type="text" placeholder="SEARCH" /> */}
          </div>
        </div>
      </section>

      <section className={clsx(styles.listCharactersWrap)}>
        <CharacterBox characters={allCharacters} />
        <div className="paginationWrap">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            previousLabel="prev"
            renderOnZeroPageCount={null}
            className={"pagination"}
          />
        </div>
      </section>
      <Promo />
      <Footer />
    </>
  );
}

export default Characters;
