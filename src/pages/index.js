import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Post from "../components/post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio/Bio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/1347599595115868162/dSzyyv9m_400x400.jpg"
          name="Olakunle Saheed"
          tagline="Helping others to learn by Doing"
          role="Frontend Developer"
        />

        <ul className={styles.posts}>
          <li>
            <Post
              content=" I am working in figma trying to design a new website that shows
              all of my tweets"
              date="13/03/2021"
            />
          </li>
          <li>
            <Post
              content=" I am working in figma trying to design a new website that shows
              all of my tweets"
              date="13/03/2021"
            />
          </li>
          <li>
            <Post
              content=" I am working in figma trying to design a new website that shows
              all of my tweets"
              date="13/03/2021"
            />
          </li>
          <li>
            <Post
              content=" I am working in figma trying to design a new website that shows
              all of my tweets"
              date="13/03/2021"
            />
          </li>
        </ul>
        <PostForm />
      </main>
    </div>
  );
}
