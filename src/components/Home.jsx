// Home.jsx, Aabeed Ismail, 301457580, 2024-09-29

import About from "./About"

const welcome = <p className="welcome">Hi my name is Aabeed and welcome to my portfolio! To view more about me click this button!</p>
const mission = <p>To create products and applications to make life easier for users</p>
const button = <button type="button" ><a href="About">About Me</a></button>


const Home = () => {
    return(
        <div>
            <h1>Welcome To My Portfolio!</h1>
            <hr />
            <fieldset className="wrapper">
            {welcome} {button}
            <h3>Mission Statement</h3>
            {mission}
            </fieldset>
            <footer>&copy; Copyright 2024 Aabeed Ismail</footer>
        </div>
    )
}

export default Home
