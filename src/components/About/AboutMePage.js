import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Timeline from '../Timeline/Timeline'

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

            <div className="timeline-container">
                    <Timeline />
                </div>
        </div>
    )
}

export default About