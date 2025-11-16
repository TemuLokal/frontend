import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Chart from './components/Chart';
import UMKM from './components/UMKM';
import Article from './components/Article';
import Footer from './components/Footer';
import DetailUMKM from './components/DetailUMKM';
import DetailArticle from './components/DetailArticle';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <section className="-mt-20 md:-mt-24 lg:-mt-32 relative z-10">
                <Chart widthPercent={0.95} layout="row" />
              </section>
              <UMKM />
              <Article />
            </>
          } />
          <Route path="/umkm/:slug" element={<DetailUMKM />} />
          <Route path="/umkm" element={<UMKM />} />
          <Route path="/article/:id" element={<DetailArticle />} />
          <Route path="/article" element={<Article />} />
          <Route path="/register" element={<Register /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App