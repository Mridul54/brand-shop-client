
import Banner from '../Header/Banner';
import Brand from './Brand';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className='mt-10'>
               <Banner></Banner>
            </div>
            <Brand></Brand>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;