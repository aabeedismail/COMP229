// Services.jsx, Aabeed Ismail, 301457580, 2024-09-29
import webimg from './webimg.jpeg';
import csharp from './c-sharp.png';
import sdlc from './SDLC.jpg';

const Services = () => {
    return(
        <div>
            <h1>Services</h1>
            <hr />
            <fieldset className="wrapper">
                <div id='serviceslist'>
                    <p>General programming</p>
                    <p>Web development</p>
                    <p>Software design</p>
                </div>
                <div id='imgpos'>
                    <img className='csharpimg' src={csharp} alt="Image of C#" width={250} />
                    <img className='webdevimg' src={webimg} alt="Image of HTML, CSS and JS" width={250} />
                    <img className='sdlcimg' src={sdlc} alt="Systems development life cycle image" width={250} />
                </div>
            </fieldset>

            <footer>&copy; Copyright 2024 Aabeed Ismail</footer>
        </div>
    )
}

export default Services