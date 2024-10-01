// Projects.jsx, Aabeed Ismail, 301457580, 2024-09-29
import proj1 from './project1.png';
import proj2 from './project2.png';
import proj3 from './project3.png';

const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            <hr />
            <h2>Project 1 - Account App</h2>
            <fieldset className='wrapper'>
            <img className='projimg' src={proj1} alt="Project 1 image" width={500}/>
            <p>
                This is an account app that I made for the final project in my programming class. It takes the user's account number, name and other information and stores it. 
            </p>
            </fieldset>

            <h2>Project 2 - Catch the Penguin</h2>
            <fieldset className='wrapper'>
            <img className='projimg' src={proj2} alt='Project 2 image ' width={500}></img>
            <p>
                This a small game that I made using Javascript in my Web development course. The penguin speeds up everytime the user clicks it. The user can also reset the speed and score to start again.
            </p>
            </fieldset>

            <h2>Project 3 - Software Specifications Document</h2>
            <fieldset className='wrapper'>
            <img className='projimg' src={proj3} alt="Project 3 image" width={500} />
            <p>
                This project was designing software specification document for the software Yummiez. My role was outlining how the application should function, as well as defining use cases.   
            </p>
            </fieldset>
         
            <footer>&copy; Copyright 2024 Aabeed Ismail</footer>
        </div>
    )
}

export default Projects;