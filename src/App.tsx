import Navbar from './components/Navbar'
import Home from './components/Home';
import Chart from './components/Chart';
import UMKM from './components/UMKM';
import Article from './components/Article';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Home />
        <section className="-mt-20 md:-mt-24 lg:-mt-32 relative z-10">
          <Chart widthPercent={0.95} layout="row" />
        </section>
        <UMKM />
        <Article />
      </div>
      <Footer />
    </>
  );
}
