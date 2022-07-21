import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className='home-text-container'>
               <h1>Desafio Github API</h1> 
               <p>Bootcamp Spring React - DevSuperior</p>
            </div>

            <Link to="/gitsearch">
                <button className="btn btn-primary btn-lg start-button btn-icon">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
