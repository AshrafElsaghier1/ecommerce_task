import { Route, Routes } from 'react-router-dom'
import {
  MyNav,
  Contact,
  Footer,
  Home,
  ProductDetails,
  NotFound
} from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const App = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      {showNav &&
        <MyNav />
      }
      <Routes >

        <Route path='/' element={<Home toggleNav={setShowNav} />} />
        <Route path='iti_task' element={<Home toggleNav={setShowNav} />} />

        <Route path='/productdetail/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound toggleNav={setShowNav} />} />
      </Routes>
      {showNav &&
        <Footer />
      }

      <ToastContainer position="top-right"
        autoClose={1000}
      />
    </>
  )
}

export default App