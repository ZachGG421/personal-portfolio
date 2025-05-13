import './index.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
        useEffect(() => {
            const timeoutId = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 4000)
        
            return () => clearTimeout(timeoutId) // Proper cleanup function
        }, [])

    return (
        <>
            <div className ='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>

                    <p>
                        I would love the chance for an opportunity where I can utilize my skills
                        as well as level up my repertoire. Life is all about evolving. 
                        Let's keep in touch!
                    </p>
                    <div className ="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>

                            </ul>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;