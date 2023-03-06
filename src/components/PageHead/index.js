import React from 'react';
import styles from './Head.module.scss';
import { useEffect, useState, useRef } from "react";
import clsx from 'clsx';

export default function CharacterInfo({infoPage}) {
	const [check , setCheck] = useState(false);
	useEffect(()=>{
		if(infoPage.headCut == "white"){
			setCheck(true);
		}
	},[])
	
	return (
		
		<section className={clsx(styles.headPage,{
			[styles.infoHead]: check
		})}> 
			
			<div className={clsx({container: check})}>
				<div className={clsx(styles.headWrap)}>
					<div className={clsx(styles.headBackground, {
						[styles.characterBgr]: check
					})} style={{backgroundImage:`${infoPage.background}`}}>
				
				</div>
				<div className={clsx(styles.textWrapper)}>
					<h1>{infoPage.h1}</h1>
					<p>{infoPage.p}</p>
				</div>
				</div>
			</div>
		</section>
	)
}
