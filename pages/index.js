import Head from 'next/head';
import Image from 'next/image';
import CardFifa from '../components/CardFifa/CardFifa';
import Header from '../components/Header/Header';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import History from '../components/History/History';

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main >
        <HeroSlider />
        <CardFifa />
        <History />
      </main>

      <footer>
      </footer>
    </div>
  )
}
