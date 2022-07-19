import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import CepSearch from 'pages/CepSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    
  </BrowserRouter>
);

export default Routes;
