import './App.css';
import Navbar from './components/NavBar';
import Banner  from './components/Banner';
import MovieList from './components/MovieList';
import Fav from './components/Fav';
function App() {
  return (
    <>
    <Navbar/> 
    <Banner/>
    <MovieList/>
    {/* <Fav/> */}
    </>
  );
}

export default App;
