import React from "react";
import clsx from "clsx";
import styles from "./CharacterBox.module.scss";

export default function index( {characters} ) {
  return (
    <div className={clsx(styles.boxWrap, "grid wide")}>
      <div className="row sm-gutter">
        {characters.map((character,index) => {
          return (
            <a key={index} href="#" className={clsx(styles.boxItem, "col l-2")}>
              <div className={clsx(styles.imgWrap)}>
                <img
                  src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
                  alt=""
                />
              </div>
              <div className={clsx(styles.nameWrap)}>
                <h3>{character.name}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
