import Header from './components/Header';
import CalcScreen from './screens/CalcScreen';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InProgressScreen from './screens/InProgressScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/calculator" element={<CalcScreen />} />
            <Route path="/inprogress" element={<InProgressScreen />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
