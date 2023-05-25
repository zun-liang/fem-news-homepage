import Web3Mobile from "../assets/images/image-web-3-mobile.jpg"
import Web3Desktop from "../assets/images/image-web-3-desktop.jpg"

const Popular = () => 
    <div className="popular" id="popular">
        <picture>
            <source srcSet={Web3Desktop} media="(min-width: 700px)" />
            <img src={Web3Mobile} alt="web3 img" className="web3" />
        </picture>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button>Read more</button>
        </div>
        
    </div>

export default Popular