import Sun from "../assests/sun.svg"
import Water from "../assests/water.svg"

function CareScale({scaleValue, careType}) {
    const plantCareValue = {
        1: "peu",
        2: "modérément",
        3: "beaucoup"
    }
    
    const range = [1, 2, 3]

    const scaleType = 
        careType === "light" ? (
            <img src={Sun} alt="sun-icon" />
        ) : (
            <img src={Water} alt="water-icon" />
    )

    return (
        <div onClick={() => handleScaleClick(careType, plantCareValue, scaleValue)}>    
            {
                range.map((rangeElement) =>
                    scaleValue >= rangeElement ? (
                    <span
                        key={rangeElement.toString()}
                        >
                            {scaleType}
                    </span>) : null
                )
            }
        </div>
    )
}

function handleScaleClick(type, careValue, value) {
    alert(`Cette plante requiert ${careValue[value]} ${type === "light" ? "de lumière" : "d'arrosage"}.`)
}

export default CareScale