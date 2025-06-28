import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './components/Admin/Dasboard.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Home />
          <Footer />
        </>
      } />
      <Route path="/login" element={
        <>
          <Header />
          <Login />
          <Footer />
        </>
      } />
      <Route path="/login/dashboard" element={
        <>
          <Header />
          <Dashboard />
          <Footer />
        </>
      } />

    </Routes>
  );
}

export default App;

//Already added tailwind for css and react router for routing and axios for fetching data
