import "../style/Banner.css"
import logo from '../assests/logo.png'

function Banner() {
    const title = "La maison jungle"

    return (<div className="lmj-banner">
            <img src={logo} alt="la maison jungle" className="lmj-logo" />

            <h1>{title}</h1>
        </div>
    )
}

export default Banner