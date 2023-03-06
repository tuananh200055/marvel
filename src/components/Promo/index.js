import React from 'react'
import styles from './Promo.module.scss'
import clsx from 'clsx'
export default function index() {
	return (
		<section className={clsx(styles.promoWrap)} >
			<div className="container">
				<div className={clsx(styles.promo)}>
					<div className={clsx(styles.banner)}>
						<img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_0.jpg" alt="" />
					</div>
					<div className={clsx(styles.content)}>
						<div className={clsx(styles.info)}>
						<h3>marvel insider</h3>
						<h2>Watch, Earn, Reddem!</h2>
						<p>Get rewarded for doing what you already do as a fan.​</p>
						<a href="#" className = "button">Join Now</a>
						</div>
						<p className={clsx(styles.term)}>Term and Conditions Apply</p>
					</div>
					

				</div>
			</div>
		</section>
	)
}