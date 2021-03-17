import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Post from "../components/post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio/Bio";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { getAllPosts, createPost } from "../lib/allPosts";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default function Home({ posts: defaultPosts }) {
  const { user, logIn, logOut } = useAuth();

  const [posts, updatePost] = useState(defaultPosts);
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const postSorted = posts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  async function handleSubmit(data, e) {
    e.preventDefault();

    await createPost(data);

    const posts = await getAllPosts();
    updatePost(posts);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Post App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <div>
          {!user && (
            <p>
              <button className={styles.login} onClick={logIn}>
                login
              </button>
            </p>
          )}
          {user && (
            <p>
              <button className={styles.login} onClick={logOut}>
                logout
              </button>
            </p>
          )}
        </div>
        <div>
          <button className={styles.change} onClick={() => setTheme(nextTheme)}>
            {theme === "light" ? <FiSun /> : <FaMoon className={styles.moon} />}
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/1347599595115868162/dSzyyv9m_400x400.jpg"
          name="Olakunle Saheed"
          tagline="Helping others to learn by Doing"
          role="Frontend Developer"
        />

        <ul className={styles.posts}>
          {postSorted.map((post) => {
            const { id, content, date } = post;

            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  }).format(new Date(date))}
                />
              </li>
            );
          })}
        </ul>
        {user && <PostForm onSubmit={handleSubmit} />}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
