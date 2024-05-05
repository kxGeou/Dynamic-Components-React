import './App.css';
import ProductCard from './components/product';
import kotzfajom from './img/ewq.jpg';
import glupikot from './img/qwe.jpg';

function App() {
  return (
    <div className="App">
       <ProductCard
        imagePath={kotzfajom}
        title="Cat with cigarette"
        description="Fajny kot z fajom"
      />
       <ProductCard
        imagePath={glupikot}
        title="Cat looking like golum"
        description="goly kot bez faji"
      />
    </div>
  );
}

export default App;
