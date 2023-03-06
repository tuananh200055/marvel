import React from 'react'
import Header from '../Header'
import PageHead from '../PageHead'

function CharacterInfo() {
	const infoPage = {
		h1: "MARVEL ",
		p :"",
		background: "url(https://terrigen-cdn-dev.marvel.com/content/prod/1x/characters_art_mas_dsk_01.jpg)",
		headCut: "white"
	      }
	return (
		<>
		<Header />
		<PageHead infoPage ={infoPage}/>
			
		</>
	)
}

export default CharacterInfo
