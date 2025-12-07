import Hero from '../hero/Hero';
// primeste movies de la app si la da mai departe catre hero
const Home = ({movies}) => {
    return(
       <Hero movies = {movies} />
    )
}

export default Home