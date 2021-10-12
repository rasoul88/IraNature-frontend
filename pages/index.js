import Head from "next/head";
import Header from "../components/header/header.component";
import About from "../components/about-section/about.component";
import Features from "../components/features/features.component";
import Tours from "../components/tours-section/tours.component";
import Stories from "../components/stories-section/stories.component";
import Footer from "../components/footer/footer.component";

export default function Home() {
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
        <Tours />
        <Stories />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
