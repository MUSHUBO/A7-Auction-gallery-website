import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Auctions from './components/Auctions/Auctions'
import { GoHeart } from "react-icons/go";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>


      <div className="main-container bg-[#EBF0F5]">
        <div className='w-10/12 mx-auto  p-10 '>
          {/* title sub-title */}
          <div>
            <h1 className='text-3xl font-medium '>Active Auctions</h1>
            <p className='mb-8'>Discover and bid on extraordinary items</p>
          </div>

          <div className='flex gap-6 mb-5'>

            {/* Active Auctions Section */}
            <div className="left-container w-[70%] bg-white rounded-3xl">
              <div className='table'>
                <thead>
                  <tr>
                    <th className='pr-64'>Items</th>
                    <th>Current Bid</th>
                    <th>Time Left</th>
                    <th>Bid Now</th>
                  </tr>
                </thead>
              </div>

              <Suspense fallback={'Loading...'}>
                <Auctions></Auctions>
              </Suspense>
            </div>

            {/* Favorite Items Section */}
            <div className='right-container lg:w-[30%] bg-white rounded-3xl h-fit text-center'>
              <h3 className='pt-6 pb-4 border-b font-medium text-3xl flex items-center justify-center'><p><GoHeart /></p><p className=''>Favorite Items</p></h3>

              <div className='border-b p-12 space-y-5'>
                <p className='text-2xl font-medium'>No favorites yet</p>
                <p>Click the heart icon on any item to add it to your favorites</p>
              </div>
              
              <h3 className='py-6 text-2xl flex justify-between px-8'>Total bids Amount:<span className='font-mono'> $0000 </span></h3>
            </div>

          </div>
        </div>
      </div>


      <Footer></Footer>
    </>
  )
}

export default App
