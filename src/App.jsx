import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Auctions from './components/Auctions/Auctions'
import { GoHeart } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [favoriteItems, setFavoriteItem] = useState([]);

  const handleFavorite = (favorite) => {
    setFavoriteItem([...favoriteItems, favorite]);
    toast('Item Added To Your Favorite List.')
  }
  // console.log(favoriteItems);

  let totalAmount = 0;
  favoriteItems.forEach(fav => {
    totalAmount += Number(fav.currentBidPrice.replace(/[^0-9.-]+/g, ""));
  });

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
              <table className='table'>
                <thead>
                  <tr>
                    <th className='pr-64'>Items</th>
                    <th>Current Bid</th>
                    <th>Time Left</th>
                    <th>Bid Now</th>
                  </tr>
                </thead>
              </table>

              <Auctions handleFavorite={handleFavorite} favoriteItems={favoriteItems}></Auctions>
              <ToastContainer />
            </div>

            {/* Favorite Items Section */}
            <div className='right-container lg:w-[30%] bg-white rounded-3xl h-fit text-center'>

              <h3 className='pt-6 pb-4 border-b font-medium text-3xl flex items-center justify-center'><p><GoHeart /></p><p className=''>Favorite Items</p></h3>

              <div className='border-b p-6 space-y-5'>
                {
                  favoriteItems.length === 0 ? (
                    <div className='item-massage'>
                      <p className='text-2xl font-medium'>No favorites yet</p>
                      <p>Click the heart icon on any item to add it to your favorites</p>
                    </div>) : (
                    favoriteItems.map(favoriteItem => (
                      <div key={favoriteItem.id} className='flex items-center gap-4 p-3 border border-base-content/10 bg-base-100 rounded-xl'>

                        <img src={favoriteItem.image} alt="" className='w-16 h-16 object-cover rounded-lg flex-shrink-0' />

                        <div className='text-left flex flex-col gap-1'>
                          <h1 className='font-semibold'>{favoriteItem.title}</h1>
                          <div className='flex gap-6 text-sm text-gray-600'>
                            <p>{favoriteItem.currentBidPrice}</p>
                            <p>Bids: {favoriteItem.bidsCount}</p>
                          </div>
                        </div>

                        <button className='-mt-14 hover:bg-red-50 hover:text-red-400 p-2 rounded-full'>
                          <MdOutlineCancel size={25} />
                        </button>
                      </div>
                    ))
                  )
                }
              </div>

              <h3 className='py-6 text-2xl flex justify-between px-8'>
                Total bids Amount:<span className='font-mono'> ${totalAmount} </span>
              </h3>

            </div>

          </div>
        </div>
      </div>


      <Footer></Footer>
    </>
  )
}

export default App
