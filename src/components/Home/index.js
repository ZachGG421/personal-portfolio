import LogoTitle from '../../assets/images/logo-s.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'Z', 'a', 'c', 'h', 'a', 'r', 'y', ' ', 'G', 'a', 'r', 'c', 'i', 'a']
    const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    //Causes a destroy error. Used to add over effect over letters
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(timeoutId) // Proper cleanup function
    }, [])
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _13`}>i,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'m</span>
                {/*<img src={LogoTitle} alt="developer" /> */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Full Stack Developer / MERN Stack Enthusiast / </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home