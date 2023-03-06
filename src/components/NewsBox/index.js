import React from 'react'
import styles from './NewBox.module.scss'
import clsx from 'clsx'

export default function index() {
	return (
		<div className={clsx(styles.box, "grid wide")}>
			<div className={clsx("row")}>
				<div className={clsx("col l-3")}>
					<a href="#" className={clsx(styles.imgWrap)}>
						<img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/190305_avengersstack_banner-01.jpg" alt="" />
					</a>
					<h4 className={clsx(styles.type)}>comics</h4>
					<a href="" className={clsx(styles.info)}>Why Captain Marvel Is the Most Powerful Hero in the Marvel Universe: An Infographic</a>
				</div>
				</div>			
		</div>
	)
}
