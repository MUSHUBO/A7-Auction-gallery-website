import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Auctions from './components/Auctions/Auctions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={'Loading...'}>
        <Auctions></Auctions>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
