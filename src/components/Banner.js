import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    const title = "La maison jungle"

    return (
        <div className='lmj-banner'>
            <img src={logo} alt="La maison jeungle" className='lmj-logo' />
            <h1 className='lmj-title'>{title} <sub>2.0</sub></h1>
        </div>
    );
}

export default Banner;
