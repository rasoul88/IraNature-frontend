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

        {/* manifest alternatives for IOS devices */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar" content="black" />
        <meta name="mobile-web-title" content="ایرانیچر" />
        <link
          rel="apple-touch-icon"
          sizes="72x72 96x96 128x128 256x256"
          href="/assets/img/favicon.png"
        />

        {/* manifest alternatives for Internet Explorer */}
        <meta
          name="msaplication-TitleImage"
          content="/assets/img/favicon.png"
        />
        <meta name="msaplication-TitleColor" content="white" />
        <meta name="theme-color" content="#3f51b5" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/tours/top-3-tours`
  );
  const ssrTop3Tours = await res.json();

  return {
    props: {
      ssrTop3Tours,
    },

    revalidate: 1000, // In seconds
  };
}
