import Head from "next/head";
import Header from "../components/header/header.component";
import About from "../components/about-section/about.component";
import Features from "../components/features/features.component";
import Tours from "../components/tours-section/tours.component";
import Stories from "../components/stories-section/stories.component";
import Footer from "../components/footer/footer.component";

export default function Home({ ssrTop3Tours }) {
  return (
    <div>
      <Head>
        <title>IraNature</title>
        <meta name="description" content="Explor all Iran using IraNaure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <About />
        <Features />
        <Tours tours={ssrTop3Tours} />
        <Stories />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:6060/api/v1/tours/top-3-tours");
  const ssrTop3Tours = await res.json();

  return {
    props: {
      ssrTop3Tours,
    },

    revalidate: 1000, // In seconds
  };
}
