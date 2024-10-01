import './App.css';
import AmazingFeatures from './components/home/Amazing';
import Hero from './components/home/Hero';
import Tracking from './components/home/Tracking';
import Workout from './components/home/Workout';

function App() {
  return (
    <>
      <Hero />
      <Workout />
      <AmazingFeatures />
      <Tracking />
    </>
  );
}

export default App;
