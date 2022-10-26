
import './App.css';
import Header from './Sheards/Header/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routers/Routers';


function App() {
  return (
    <RouterProvider router={router}>
        
    </RouterProvider>
  );
}

export default App;
