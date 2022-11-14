import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout"
import Home from "./components/Home"
import Easy from './components/Easy';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/easy" index element={<Easy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
