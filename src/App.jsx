import '/src/App.css';
import NavBar from '/src/components/Navbar.jsx';
import Footer from '/src/components/Footer.jsx';
import SideBar from '/src/components/SideBar';
import Home from '/src/components/Home';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="main-container">
        <SideBar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;