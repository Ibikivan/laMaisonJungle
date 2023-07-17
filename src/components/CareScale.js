import sun from '../assets/sun.svg';
import water from '../assets/water.svg';
import { handleCare } from '../utilities/helpers';

function CareScale({type, value}) {
    const range = [1, 2, 3];

    const careType = type === "light" ?
    (<img src={sun} alt='sun' />) :
    (<img src={water} alt='water' />);

    return (<div title={handleCare(type, value)}>{range.map((mapRange) => (
        value >= mapRange && careType
    ))}</div>)
}

export default CareScale
