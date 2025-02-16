import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')



    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(timeoutId) // Proper cleanup function
    }, [])
    

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>As an aspiring software developer specializing in front-end development, 
                    I am passionate about creating visually stunning and user-friendly web applications. 
                    My journey into programming began during my high school years, learning the fundamentals of coding and problem-solving.
                    I continued my journey in college where I pursued a degree in Information Technology with a focus on web applications. 
                    This foundation has equipped me with a solid understanding of HTML, CSS, and JavaScript, 
                    and I am continually seeking new opportunities to expand my knowledge and stay updated with the latest industry trends.</p>
                <p>I am driven by a strong desire to craft seamless and engaging digital experiences for users. 
                    My attention to detail, creativity, and problem-solving skills make me a valuable asset to any development team. 
                    I thrive in collaborative environments and enjoy working closely with designers, and other developers 
                    to bring innovative ideas to life.</p>
                <p>As I continue to grow in my career, I am eager to take on new challenges and contribute to projects that push the boundaries of front-end development. 
                    My ultimate goal is to become a master in this craft, known for creating exceptional user interfaces that enhance both the functionality and aesthetic appeal of web applications.</p>
            </div>

            {/*
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

             */}
        </div>
    )
}

export default About