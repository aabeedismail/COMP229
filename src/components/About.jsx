// About.jsx, Aabeed Ismail, 301457580, 2024-09-29
import img from './Me.jpg';

const About = () => {
    return(
        <div>
            <h1>About Me - Aabeed Ismail</h1> 
            <hr />
            
            <fieldset className='wrapper'>
            <img className='myPic' src={img} alt='Picture of me' width={350}/>
            <p className='aboutMe'> My name is Aabeed Ismail. I am 22 years old, and currently enrolled in Software Engineering Technology Artificial Intelligence at Centennial College. <br />I have basic knowledge in languages such as C# and Javascript, as well as Python and HTML/CSS. I am also famililar with SQL.
            </p>
            <p>
                
            </p>
            </fieldset>
            <footer>&copy; Copyright 2024 Aabeed Ismail</footer>
        </div>
    )
}

export default About