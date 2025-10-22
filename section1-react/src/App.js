import './App.css';
import { Routes, Route } from 'react-router-dom';
import Result from './components/pages/Result';
import Submit from './components/pages/Submit';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Submit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
