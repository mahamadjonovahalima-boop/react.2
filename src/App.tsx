import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import { FavoritesProvider } from './context/favorites-context';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <div className='min-h-screen bg-slate-50 flex flex-col'>
          <Navbar/>
          <main className='flex-1'>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movie/:id" element={<MovieDetails/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
              </Routes>
          </main>
        </div>
      </BrowserRouter>
 </FavoritesProvider>
  );
}
 

export default App;
