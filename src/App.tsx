import Navbar from './components/Navbar'
import Home from './components/Home';
import UMKM from './components/UMKM';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-15">
        <Home />
        <UMKM />
        <Article />
        <Footer />
      </div>
    </>
  )
}

export default App
