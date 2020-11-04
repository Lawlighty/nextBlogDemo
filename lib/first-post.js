import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>第一帖子</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>back to Home</a>
        </Link>
      </h2>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>
        {`
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }
          .logo {
            height: 1em;
          }
        `}
      </style>
    </Layout>
  );
}
