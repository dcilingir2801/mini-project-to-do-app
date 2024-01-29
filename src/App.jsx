import '/src/App.css';
import NavBar from '/src/components/Navbar.jsx';
import Footer from '/src/components/Footer.jsx';
import SideBar from '/src/components/SideBar';


const App = () => {
  return (
    <div className="main-container">
      <NavBar />
      <SideBar />
      <Footer />
      </div>
  );
};

export default App;