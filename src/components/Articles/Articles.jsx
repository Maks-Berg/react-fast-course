import React, {useState} from "react";

// Scss
import styles from "./Articles.module.scss";

const Articles = () => {
    const [posts, setPosts] = useState([])

    React.useEffect(() => {
            const fetchData = async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();

                setPosts(data);
                console.log(data)
            }

            fetchData();
        },
    )

    return (
        <div className={styles.articles}>
            <div className={`${styles.articles__container} container`}>
                <div className={styles.articles__list}>
                    {posts.map((item, idx) => (
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