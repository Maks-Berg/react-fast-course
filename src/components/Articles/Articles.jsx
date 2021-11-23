import React from "react";

// Data
import { dataPosts } from "./dataPosts";

// Scss
import styles from "./Articles.module.scss";

const Articles = () => {
    return (
        <div className={styles.articles}>
            <div className={`${styles.articles__container} container`}>
                <div className={styles.articles__list}>
                    {dataPosts.map((item, idx) => (
                        <article className={styles.articles__item}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Articles;