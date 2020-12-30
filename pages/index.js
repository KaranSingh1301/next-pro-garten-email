import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Body from './components/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div >
      <Head>
        <title>Pro Garten</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Body />
      <Footer />
      
    </div>
  )
}
