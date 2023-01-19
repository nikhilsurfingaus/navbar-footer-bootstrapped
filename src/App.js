import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import InfoDis from './components/InfoDis';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <InfoDis />
      <Footer />
    </div>
  );
}

export default App;
