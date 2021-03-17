import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Post from "../components/post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio/Bio";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { getAllPosts, createPost } from "../lib/allPosts";

export default function Home({ posts: defaultPosts }) {
  const { user, logIn, logOut } = useAuth();

  const [posts, updatePost] = useState(defaultPosts);

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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <p>
          <button onClick={logIn}>login</button>
        </p>
      )}
      {user && (
        <p>
          <button onClick={logOut}>logout</button>
        </p>
      )}

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
  // const posts = await getAllPosts();

  return {
    props: {
      posts: [],
    },
  };

  return;
}
