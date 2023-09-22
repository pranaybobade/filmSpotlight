import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home/Home'
import PageNotFound from './Pages/404/PageNotFound'
import Detail from './Pages/details/Detail'
import Header from './components/header/Header'
import PopularSeries from './Pages/home/PopularSeries/PopularSeries'
import Footer from './components/footer/Footer'
import PersonDetail from './Pages/Person/PersonDetail'
import Explore from './Pages/Movies/Explore'
import SearchResult from './Pages/SearchResult/SearchResult'
import ScrollToTop from './components/ScrollToTop'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const App = () => {
  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const [visible, setVisible] = useState(false)
  const scrollTop = () => {
    const height = 250;
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (scroll > height) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTop);

    return () => window.removeEventListener('scroll', scrollTop)
  }, [])


  return (
    <div className='bg-black font-Roboto'>
      <Router>
        {/* When route change it will scroll to top */}
        <ScrollToTop />
        <Header />
        {
          visible && <div className='bg-white w-10 h-10 rounded-full fixed z-40 right-4 top-[540px] flex justify-center items-center cursor-pointer' onClick={gotoTop}>
            <ArrowUp size={28} strokeWidth={2.5} className='animate-bounce duration-300 mt-2' />
          </div>
        }
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<PopularSeries />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/:mediaType/:id' element={<Detail />} />
            <Route path='person/:id' element={<PersonDetail />} />
            <Route path='/explore/:mediaType' element={<Explore />} />
            <Route path='/search/:query' element={<SearchResult />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App