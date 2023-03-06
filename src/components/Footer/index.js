import React from "react";
import styles from "./Footle.module.scss";
import clsx from "clsx";
export default function index() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.primaryLink)}>
            <img
              src="https://www.marvel.com/static/images/favicon/android-chrome-icon-194.png"
              alt=""
            />
            <nav className={clsx(styles.linkWrap)}>
              <ul>
                <li>
                  <a href="#">about marvel</a>
                </li>
                <li>
                  <a href="#">help/faqs</a>
                </li>
                <li>
                  <a href="#">careers</a>
                </li>
                <li>
                  <a href="#">internships</a>
                </li>
              </ul>
            </nav>
            <nav className={clsx(styles.linkWrap)}>
              <ul>
                <li>
                  <a href="#">advertising</a>
                </li>
                <li>
                  <a href="#">Disney+</a>
                </li>
                <li>
                  <a href="#">marvelhq.com</a>
                </li>
                <li>
                  <a href="#">reddem digital comics</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav className={clsx(styles.promoLink)}>
            <div className={clsx(styles.promoContent)}>
              <img
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
                alt=""
              />
              <div className={clsx(styles.textWrap)}>
                <h3>Marvel insider</h3>
                <p>Access over 29,000+ digital comics </p>
              </div>
            </div>
            <div className={clsx(styles.promoContent)}>
              <img
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png"
                alt=""
              />
              <div className={clsx(styles.textWrap)}>
                <h3>Marvel unlimited</h3>
                <p>Access over 29,000+ digital comics</p>
              </div>
            </div>
          </nav>
          <h3 className={clsx(styles.follow)}>follow marvel</h3>
        </div>
       
      </div>
      <div className={clsx(styles.legal)}>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Your California Privacy Rights</a>
          <a href="#">Do Not Sell My Personal Information</a>
          <a href="#">Children's Online Privacy Policy</a>
          <a href="#">License Agreement</a>
          <a href="#">Interest-Based Ads</a>
          <a href="#">Marvel Insider Terms</a>
	  <span>©2022 MARVEL</span>
        </div>
    </footer>
  );
}
