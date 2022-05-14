import Meta from "../components/Meta";
import styles from "../styles/About.module.css";

export default function about() {
  return (
    <div>
      {/* <Head>
        <title>About</title>
        <meta
          name="description"
          content="Buy high-quality bicycle parts and save money while riding through Nevada. "
        />
        <meta
          name="keyword"
          content="next js master class by Najmul, master class, nextjs"
        />
      </Head> */}
      <Meta
        title="About"
        description="Buy high-quality bicycle parts and save money while riding through Nevada."
        keyword="next js master class by Najmul, master class, nextjs"
      />

      <h1 className={styles.name}>about page</h1>
    </div>
  );
}
